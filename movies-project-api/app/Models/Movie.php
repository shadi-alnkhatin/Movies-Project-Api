<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{

    protected $fillable = ['title', 'release_year', 'duration','description','poster_url','trailer_url'];

    // Define the many-to-many relationship
    public function genres()
    {
        return $this->belongsToMany(Genre::class, 'movies_genres', 'movie_id', 'genre_id');
    }
    public function favorites()
    {
        return $this->hasMany(Favorite::class);
    }
}
