<?php

namespace App\Http\Controllers;

use App\Mail\Asset;
use App\Mail\ResetPassword;
use App\Models\User;
use App\Models\OnboardingAnswer;
use App\Services\OnboardingAnswersServices\OnboardingAnswersServices;
use App\Services\UserServices\UserServices;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use App\Jobs\NewUserEmail;
use App\Jobs\ResetPasswordJob;
use Illuminate\Support\Facades\Crypt;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{

    protected UserServices $userServices;
    protected OnboardingAnswersServices $onboardingAnswersServices;

    /**
     * @param UserServices $userServices
     * @param OnboardingAnswersServices $onboardingAnswersServices
     */
    public function __construct(UserServices $userServices , OnboardingAnswersServices $onboardingAnswersServices )
    {
        $this->userServices = $userServices;
        $this->onboardingAnswersServices = $onboardingAnswersServices;
    }

    /**
     * @param Request $request
     * @return JsonResponse
     * @throws ValidationException
     */
    public function register(Request $request): JsonResponse
    {
        try {
            $this->validate($request, [
                'name'             => 'required|string',
                'email'            => 'required|email|unique:users',
                'password'         => 'required|min:8',
                'confirm_password' => 'required|same:password',
                'role'             => 'required|string|in:User,VendorAdmin',
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'error' => $e->validator->errors()->first(),
            ], 422);
        }
        $userData = [
            'name'     => $request->input('name'),
            'email'    => $request->input('email'),
            'password' => Hash::make($request->password),
        ];
        $user = $this->userServices->createUser($userData);
        if ($user) {
            $role = $request->input('role');
            if ($role == 'User') {
                $user->assignRole('User');
            } elseif ($role == 'VendorAdmin') {
                $user->assignRole('VendorAdmin');
            }
            $token = Str::random(64);
            DB::table('personal_access_tokens')->insert([
                'name' => 'email_verification_token',
                'token' => $token,
                'tokenable_id' => $user->id,
                'tokenable_type' => 'App\Models\User',
            ]);
            dispatch(new NewUserEmail($user->toArray() , $token));
        }
        else
        {
            return response()->json(['error' => 'Account could not be created'], 422);
        }
        return response()->json(['message' => 'Account created successfully. Check your email for verification'], 201);
    }
    public function verifyEmail(Request $request)
    {
        $this->validate($request, [
            'token' => 'required',
        ]);
        $verificationToken = PersonalAccessToken::where('token', $request->input('token'))->first();
        if (!$verificationToken) {
            return response()->json(['error' => 'Invalid token.'], 422);
        }
        $user = $this->userServices->findOneUserBy(['id' => $verificationToken->tokenable_id]);
        if(!$user)
        {
            return response()->json(['error' => 'User does not exists.'], 422);
        }
        if($user->email_verified_at)
        {
            return response()->json(['error' => 'Email already Verified'], 422);
        }
        $data = [
            'email_verified_at' => now(),
        ];
        $this->userServices->updateUserDetails($data, $user->id);
        $verificationToken->delete();
        return response()->json(['message' => 'Email Verified. kindly login.',], 200);
    }
    public function getUserDetails(Request $request): JsonResponse
    {
        $userId = $request->input('user_id');
        $user = $this->userServices->findOneUserBy(['id' => $userId], ['OnboardingAnswer' , 'Vendor', 'vendor.image']);
        $data = [];
        if ($user) {
            $statusCode = 200;
            $userData = [
                'name'  => $user->name,
                'email' => $user->email,
            ];
            $data = array_merge($data , $userData);
            if ($user->onboardingAnswer) {
                $onboardingData = [
                    'bussiness_name'     => $user->OnboardingAnswer->answer_1,
                    'bussiness_category' => json_decode($user->OnboardingAnswer->answer_2, true),
                ];
                $data = array_merge($data , $onboardingData);
            }
            if ($user->vendor) {
                $vendorData = [
                    'designation'          => $user->vendor->designation,
                    'business_website'     => $user->vendor->business_website,
                    'business_address'     => $user->vendor->business_address,
                    'business_description' => $user->vendor->business_description,
                ];
                $data = array_merge($data , $vendorData);
            }
            if ($user->vendor && $user->vendor->image()->count() > 0) {
                $imageData = [];
                foreach ($user->vendor->image as $image) {
                    $imageUrl = $image->path;
                    $imageData[] = [
                        'path' => $imageUrl,
                    ];
                }
                $data = array_merge($data, $imageData);
            }
        } else {
            $statusCode = 403;
            $data = [
                'message' => 'user not found'
            ];
        }
        return response()->json($data, $statusCode);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            // if (!$user->email_verified_at) {
            //     return response()->json(["error" => "Email not verified. Please check your inbox for the verification email sent at time of registration."], 401);
            // }
            $role = $user->getRoleNames()->first();
            if ($role !== $request->input('role')) {
                return response()->json(["error" => "Invalid role."], 401);
            }
            $token = $user->createToken('api_auth_token')->plainTextToken;
            return response()->json(['token' => $token, 'user' => $user, 'role' => $role], 200);
        }
        return response()->json(['error' => 'Invalid Credentials'], 401);
    }


    public function forgotPassword(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
        ]);
        $emailExists = $this->userServices->userExists(['email' => $request->input('email')]);
        if (!$emailExists) {
            return response()->json(['message' => 'Email does not match our records'], 403);
        }
        $token = Str::random(64);
        $data = DB::table('password_reset_tokens')->where(['email' => $request->input('email')])->first();
        if ($data) {
            return response()->json(['message' => 'Email has already been sent to you. Please check'], 500);
        }
        DB::table('password_reset_tokens')->insert([
            'email' => $request->input('email'),
            'token' => $token,
            'created_at' => now()
        ]);
        dispatch(new ResetPasswordJob($request->input('email'), $token));
        return response()->json(['message' => 'Email has been sent successfully please check' , 'token' => $token ,'email' => $request->input('email')]);
    }

    /**
     * @return JsonResponse
     */
    public function logout(Request $request)
    {
        $token = $request->header('Authorization');
        if (Auth::check()) {
            $user = Auth::user();
            $user->tokens()->where('token', $token)->delete();
            return response()->json(['message' => 'Successfully logged out'], 200);
        } else {
            return response()->json(['message' => 'Not logged in'], 401);
        }
    }

    public function isSession()
    {
        if (Auth::check()) {
            return response()->json(true, 200);
        } else {
            return response()->json(false, 401);
        }
    }

    public function showResetForm(Request $request, $token = null)
    {
        return view('reset_password')->with(['token' => $token, 'email' => $request->email]);
    }

    public function resetPassword(Request $request)
    {
        $this->validate($request, [
            'token' => 'required',
            'email' => 'required|email',
            'new_password' => 'required|min:8',
            'confirm_password' => 'required|same:new_password',
        ]);
        $data = DB::table('password_reset_tokens')->where(['token' => $request->input('token')])->first();
        if (!$data) {
            return response()->json(['message' => "Invalid Token Provided"], 403);
        } else {
            User::where('email', $request->input('email'))->update([
                'password' => Hash::make($request->input('new_password'))
            ]);
            DB::table('password_reset_tokens')->where(['email' => $request->input('email')])->delete();
            return response()->json(['message' => "Password changed successfully. Please login to your application"], 200);
        }
    }

    public function updateProfile(Request $request)
    {
        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:5048', // Adjust allowed image types and size
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->first()], 500);
        }

        $user = Auth::user();

        // Handle image upload and update if an image is provided
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('profile_images', 'public');

            $imageUrl = Storage::url($imagePath);

            $user->avatar = $imageUrl;
            $user->save();
        }

        $user->refresh();

        return response()->json(['data' => $user], 200);
    }

    public function updateProfileDetails(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . Auth::id(),
            'company_name' => 'nullable',
            'password' => 'nullable'
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->first()], 500);
        }

        $user = Auth::user();
        $user->name = $request->input('name');
        $user->company_name = $request->input('company_name');

        if ($request->has('email')) {
            $user->email = $request->input('email');
        }

        if ($request->has('password')) {
            $user->password = Hash::make($request->input('password'));
        }

        $user->save();
        $user->refresh();

        return response()->json(['data' => $user], 200);
    }

    public function emailAsset(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'file' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->first()], 400);
        }

        try {
            $imagePath = $request->file('file')->store('profile_images', 'public');

            $imageUrl = Storage::url($imagePath);

            $email = $request->input('email');

            Mail::to($email)->send(new Asset($imageUrl));

            Storage::disk('public')->delete($imagePath);

            return response()->json(['message' => 'Email has successfully sent']);

        } catch (\Exception $exception) {
            return response()->json(['message' => $exception->getMessage()], 400);
        }
    }
}
