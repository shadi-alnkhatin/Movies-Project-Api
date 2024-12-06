<?php

namespace App\Http\Controllers;

use App\Http\Controllers\MyBaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Movie;

use App\Models\Genre;

class MovieController extends MyBaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies = Movie::all();

        // Fetch movies by genres
        $action = Movie::whereHas('genres', function ($query) {
            $query->where('genres.id', 1);
        })->get();

        $romance = Movie::whereHas('genres', function ($query) {
            $query->where('genres.id', 2);
        })->get();

        $drama = Movie::whereHas('genres', function ($query) {
            $query->where('genres.id', 3);
        })->get();

        return $this->sendResponse([
            'movies' => $movies,

                'Action' => $action,
                'Romance' => $romance,
                'Drama' => $drama
            
            ],'Movies return successfully');

    }

    /**
     * Display the specified resource detail.
     */
    public function detail($id)
    {
        $movie = Movie::findOrFail($id);

        return $this->sendResponse([
            'movie' => $movie,
            'genres' => $movie->genres // Assuming a relationship is defined
        ],'Movies Details With Genre');
    }

    /**
     * Display the favorite list for the authenticated user.
     */
    public function favoriteList()
    {
        $user = Auth::user();

        // Retrieve all favorite movies for the authenticated user
        $favorites = $user->favorites()->with('movie')->get()->pluck('movie');

        return $this->sendResponse([
            'favorites' => $favorites
        ],'Faviorate Movies For User');
    }

    /**
     * Search for movies by title or description.
     */
    public function search(Request $request)
    {
        $str = $request->query('search'); // Get the 'search' query parameter
        $movies = Movie::where('title', 'LIKE', '%' . $str . '%')
            ->orWhere('description', 'LIKE', '%' . $str . '%')
            ->get();

        return $this->sendResponse([
            'search_results' => $movies
        ],'Search Results');
    }
}
