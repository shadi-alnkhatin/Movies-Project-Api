import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Favorite Button Component
const FavoriteButton = ({ isFavorited, onClick }) => {
  return (
    <button onClick={onClick} className="favorite">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill={isFavorited ? 'red' : 'currentColor'}
        className="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
        />
      </svg>
    </button>
  );
};

// MoviesList Component
const MovieCard = ({movie}) => {
  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [favorites, setFavorites] = useState([]);



  // // Handle favorite click
  // const handleFavoriteClick = (movieId) => {
  //   if (favorites.includes(movieId)) {
  //     setFavorites(favorites.filter((id) => id !== movieId));
  //   } else {
  //     setFavorites([...favorites, movieId]);
  //   }
  // };

  // // Handle loading or error state
  // if (loading) return <p>Loading movies...</p>;
  // if (error) return <p>{error}</p>;

  return (
    <div className="movies-list">
    
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
          <a className="link-light" href={`/movie/${movie.id}`} title={movie.title} style={{
    textDecoration: 'none',
  }}>
          <h4 className="title">{movie.title}</h4>
          </a>

          {/* Favorite Button
          <FavoriteButton
            isFavorited={favorites.includes(movie.id)}
            onClick={() => handleFavoriteClick(movie.id)}
          /> */}

          {/* Movie Meta Information */}
          <div className="meta-list">
            <div className="card-badge"> {movie.release_year}</div>
          </div>
        </div>
     

    </div>
  );
};

export default MovieCard;
