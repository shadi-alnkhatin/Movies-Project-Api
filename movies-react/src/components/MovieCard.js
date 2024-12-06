import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Favorite Button Component


// MoviesList Component
const MovieCard = ({ movie }) => {
 

  return (
    <div className='movie-list'>
    <div key={movie.id} className="movie-card">
      {/* Movie Poster */}
      <figure className="poster-box card-banner">
        <a href={`/movie/${movie.id}`} title={movie.title}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_url}`}
            alt={movie.title}
            className="img-cover"
            height="100%"
            width="80%"
            loading="lazy"
          />
        </a>
      </figure>

      {/* Movie Title */}
      <a
        className="link-light"
        href={`/movie/${movie.id}`}
        title={movie.title}
        style={{
          textDecoration: 'none',
        }}
      >
        <h4 className="title">{movie.title}</h4>
      </a>


      {/* Movie Meta Information */}
      <div className="meta-list">
        <div className="card-badge"> {movie.release_year}</div>
      </div>
    </div>
    </div>
  );
};

export default MovieCard;
