import React from 'react';
import './MovieCard.css'; 
import starImage from '../assets/images/star.png';
import axios from 'axios'




const FavoriteButton = ({ isFavorited, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="favorite"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill={isFavorited ? 'red' : 'currentColor'}
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
        />
      </svg>
    </button>
  );
};


const MovieCard = ({ movie, onFavoriteClick, isFavorited }) => {
  return (
    <div className="movie-card">
      <figure className="poster-box card-banner">
        <a href={`/movie/details/${movie.id}`} title={movie.title}>
          <img
            src={movie.poster_url}
            alt={movie.title}
            className="img-cover"
            height="100%"
            width="80%"
            loading="lazy"
          />
        </a>
      </figure>

      <a href={`/movie/details/${movie.id}`} title={movie.title}>
        <h4 className="title">{movie.title}</h4>
      </a>

      {/* Favorite button */}
      <FavoriteButton
        isFavorited={isFavorited}
        onClick={onFavoriteClick}
      />

      {/* Meta information */}
      <div className="meta-list">
        <div className="meta-item">
        <img
        src={starImage}
        width="20"
        height="20"
        alt="rating"
        loading="lazy"
      />

          <span className="span">4.5</span>
        </div>

        <div className="card-badge">2022</div>
      </div>
    </div>
  );
};

export default MovieCard;
