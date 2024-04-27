<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;
use App\Models\Comment;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    /**
     * Get all comments related to a specific feedback.
     *
     * @param  int  $feedbackId
     * @return \Illuminate\Http\Response
     */
    public function getCommentsByFeedback(Request $request)
    {
        // Retrieve the feedback
        $feedback = Feedback::find($request->input('feedback_id'));

        // Check if the feedback exists
        if (!$feedback) {
            return response()->json(['error' => 'Feedback not found'], 404);
        }

        // Retrieve all comments related to the feedback
        $comments = $feedback->comments;

        return response()->json($comments, 200);
    }

    /**
     * Add a new comment to a feedback.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addCommentToFeedback(Request $request)
    {
        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|integer',
            'feedback_id' => 'required|integer',
            'name' => 'required|string',
            'comment_content' => 'required|string',
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Create and save the new comment
        $comment = new Comment();
        $comment->user_id = $request->input('user_id');
        $comment->feedback_id = $request->input('feedback_id');
        $comment->name = $request->input('name');
        $comment->comment_content = $request->input('comment_content');
        $comment->save();

        return response()->json(['message' => 'Comment added successfully'], 201);
    }
}
