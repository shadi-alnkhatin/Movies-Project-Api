<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends MyBaseController
{
    //

    public function index(){
        $genres = Genre::all();
        return $this->sendResponse($genres, 'Genre Data');
    }
    public function getMoviesBasedGenre($id){
        $genre = Genre::find($id);
        $movies = $genre->movies;
        $genres=Genre::all();
        return $this->sendResponse([$genre,$movies,$genres], 'Genres Data');
    }
}
