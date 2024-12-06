import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import MovieCard from './MovieCard';

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const token = Cookies.get('token');

  useEffect(() => {
    if (token) {
      axios.get('http://127.0.0.1:8000/api/favorites', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setFavoriteMovies(response.data.data);
      })
      .catch(error => console.error('Error fetching favorites:', error));
    } else {
      const storedFavorites = Cookies.get('favorites') ? JSON.parse(Cookies.get('favorites')) : [];
      setFavoriteMovies(storedFavorites);
    }
  }, [token]);

  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      <div className="movies-list">
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No Favorites Yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
