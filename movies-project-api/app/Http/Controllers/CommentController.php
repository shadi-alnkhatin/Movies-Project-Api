<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends MyBaseController
{
    public function store(Request $request, $movieId)
{
    $request->validate([
        'content' => 'required|string|max:500',
    ]);

    $comment = new Comment();
    $comment->content = $request->content;
    $comment->user_id = Auth::id();
    $comment->movie_id = $movieId;
    $comment->save();

    return $this->sendResponse($comment,'Comment added successfully');
}

public function index($movieId)
{
    $comments = Comment::where('movie_id', $movieId)->with('user')->get();
    return $this->sendResponse($comments,'Comment returned successfully for movie.');
}


}
