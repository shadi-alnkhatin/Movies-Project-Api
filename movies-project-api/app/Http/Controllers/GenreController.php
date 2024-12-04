<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    //

    public function index(){
        $genres = Genre::all();
        return $genres;
    }
    public function getMoviesBasedGenre($id){
        $genre = Genre::find($id);
        $movies = $genre->movies;
        $genres=Genre::all();
        return view('filter', compact('movies','genre','genres'));
    }
}
