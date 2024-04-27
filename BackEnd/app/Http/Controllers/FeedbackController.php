<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;
use Illuminate\Support\Facades\Validator; // Correct import statement

class FeedbackController extends Controller
{
    public function getFeedback(Request $request)
{
    // Validate incoming request
    $validator = Validator::make($request->all(), [
        'feedback_id' => 'required|integer',
    ]);

    // Check if validation fails
    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    // Retrieve feedback data based on feedback_id
    $feedbackData = Feedback::join('users', 'feedback.user_id', '=', 'users.id')
                            ->select('feedback.*', 'users.name as user_name')
                            ->where('feedback.id', $request->input('feedback_id'))
                            ->first();

    // Check if feedback with the provided ID exists
    if (!$feedbackData) {
        return response()->json(['error' => 'Feedback not found'], 404);
    }

    // Return the feedback data to the client side
    return response()->json($feedbackData, 200);
}

    public function index()
    {
        // Fetch all feedback data with user names
        $feedbackData = Feedback::join('users', 'feedback.user_id', '=', 'users.id')
                                ->select('feedback.*', 'users.name as user_name')
                                ->get();

        // Return the feedback data to the client side
        return response()->json($feedbackData, 200);
    }
    public function store(Request $request)
    {
        // Define validation rules
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'category' => 'required|string',
            'description' => 'required|string',
            'user_id' => 'required|integer',
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // If validation passes, create and save feedback
        $feedback = new Feedback();
        $feedback->title = $request->input('title');
        $feedback->category = $request->input('category');
        $feedback->description = $request->input('description');
        $feedback->user_id = $request->input('user_id');
        
        // Save the feedback
        $feedback->save();

        // Return success response
        return response()->json(['message' => 'Feedback saved successfully'], 200);
    }
}
