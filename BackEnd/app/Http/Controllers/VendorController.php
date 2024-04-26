<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\OnboardingAnswersServices\OnboardingAnswersServices;
use App\Services\UserServices\UserServices;
use App\Services\MediaServices\MediaServices;
use App\Services\VendorProfileServices\VendorProfileServices;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rule;
use App\Models\Vendor;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class VendorController extends Controller
{
    protected UserServices $userServices;
    protected VendorProfileServices $vendorProfileServices;
    protected MediaServices $mediaServices;
    protected $images = [];
    protected $files = [];


    protected OnboardingAnswersServices $onboardingAnswersServices;

    /**
     * @param UserServices $userServices
     * @param OnboardingAnswersServices $onboardingAnswersServices
     */
    public function __construct(UserServices $userServices , OnboardingAnswersServices $onboardingAnswersServices ,
        VendorProfileServices $vendorProfileServices , MediaServices $mediaServices)
    {
        $this->userServices = $userServices;
        $this->onboardingAnswersServices = $onboardingAnswersServices;
        $this->vendorProfileServices = $vendorProfileServices;
        $this->mediaServices = $mediaServices;
    }
    public function updateVendor(Request $request): JsonResponse
    {
        try {
            $userId = Auth::id();
            $this->validate($request, [
                'email' => [
                    'required|email',
                    Rule::unique('users')->ignore($userId),
                ],
                'name' => 'required|string',
                'vendor.designation' => 'required',
                'vendor.business_website' => 'required',
                'vendor.business_address' => 'required',
                'vendor.business_description' => 'required',
                'answers.business_name' => 'required',          //on boarding answer 1
                'answers.business_category' => 'required',      //on boarding answer 2
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'error' => $e->validator->errors()->first(),
            ], 422);
        }
        if ($userId) {
            $userData =[
                'name'  => $request->input('name'),
                'email' => $request->input('email'),
            ];
            $this->userServices->updateUserDetails($userData , $userId);

            $answers = $request->input('answers');
            $onboardingAnswersToDb =[
                'answer_1' => $answers['business_name'],
                'answer_2' => json_encode($answers['business_category']),
            ];
            $this->onboardingAnswersServices->updateOrCreate(["user_id" => $userId ] , $onboardingAnswersToDb);

            $vendor = $request->input('vendor');
            $vendorProfileData =[
                'designation'          => $vendor['designation'],
                'business_website'     => $vendor['business_website'],
                'business_address'     => $vendor['business_address'],
                'business_description' => $vendor['business_description'],
            ];
            $vendor = $this->vendorProfileServices->updateOrCreate(["user_id" => $userId ], $vendorProfileData );

            if($request->hasFile('images'))
            {
                $this->validate($request, [
                    'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:1024', 
                    'files.*' => 'file|mimes:pdf,doc,docx|max:5120', 
                ]);
                $this->images = $request->file('images');
                $this->files = $request->file('files');
                $this->mediaServices->updateMedia($vendor, $this->images , $this->files);
            }
        } else {
            return response()->json(['error' => 'Vendor profile cannot be updated'], 422);
        }
        return response()->json(['message' => 'Vendor profile updated successfully'], 200);
    }
}
