<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends MyBaseController
{

    public function add( $id){
        $user = Auth::user();

    if (!$user) {
        return response()->json(['error' => 'User not authenticated'], 401);
    }

    $added = false;
    if (!$user->hasFavorited($id)) {
        $user->favorites()->create(['movie_id' => $id]);
        $added = true;
    }

    return $this->sendResponse($added, '');

    }
    public function remove( $id)
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['error' => 'User not authenticated'], 401);
        }
        $removed=false;
        // Remove the favorite record
        if($user->favorites()->where('movie_id', $id)->delete()){
            $removed=true;
        }
        return $this->sendResponse($removed,'');
    }


}
