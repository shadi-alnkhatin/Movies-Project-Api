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
        return $this->sendResponse(['movies'=>$movies,'genreName'=>$genre->name], 'Genres Data');
    }
}
