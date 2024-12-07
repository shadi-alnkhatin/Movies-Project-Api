import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Cookies from 'js-cookie';


const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    if (token) {
      axios.get('http://127.0.0.1:8000/api/favorites', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setFavoriteMovies(response.data.data.favorites);
      })
      .catch(error => console.error('Error fetching favorites:', error));
    } else {
      const storedFavorites = Cookies.get('favorites') ? JSON.parse(Cookies.get('favorites')) : [];
      setFavoriteMovies(storedFavorites);
    }
  }, [token]);

  return (
    <div className="movies-list">
      <h2>Your Favorites</h2>
      <div className="grid-list">
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
