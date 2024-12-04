<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{

    public function add(Movie $movie){
        $user =Auth::user();
        if(!$user->hasFavorited($movie)){

            $user->favorites()->create(['movie_id' => $movie->id]);
        }
        return back();

    }
    public function remove(Movie $movie)
    {
        $user = Auth::user();

        // Remove the favorite record
        $user->favorites()->where('movie_id', $movie->id)->delete();

        return back();  // Redirect back to the previous page
    }

    
}
