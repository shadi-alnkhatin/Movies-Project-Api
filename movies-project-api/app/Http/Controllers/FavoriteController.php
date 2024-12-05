<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends MyBaseController
{

    public function add(Movie $movie){
        $user =Auth::user();
        $added=false;
        if(!$user->hasFavorited($movie)){

            $user->favorites()->create(['movie_id' => $movie->id]);
            $added=true;
        }
        return $this->sendResponse($added,'');

    }
    public function remove(Movie $movie)
    {
        $user = Auth::user();
        $removed=false;
        // Remove the favorite record
        if($user->favorites()->where('movie_id', $movie->id)->delete()){
            $removed=true;
        }
        return $this->sendResponse($removed,'');  
    }


}
