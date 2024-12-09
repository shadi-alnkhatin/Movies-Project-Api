import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Cookies from 'js-cookie';
import RingLoader from "react-spinners/ClipLoader";



const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const token = localStorage.getItem('authToken');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (token) {
      axios.get('http://127.0.0.1:8000/api/favorites', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setFavoriteMovies(response.data.data.favorites);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching favorites:', error));
    } else {
      const storedFavorites = Cookies.get('favorites') ? JSON.parse(Cookies.get('favorites')) : [];
      setFavoriteMovies(storedFavorites);
    }
  }, [token]);

  if (loading) return  (<div
    className="spinner-container"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
  <RingLoader color="#007bff" loading={loading} size={100} />
</div>);
  return (
    <div className="movies-list" style={{marginLeft:'20px'}}>
      <br /><br />
      <h2 style={{fontSize:'30px', fontWeight:'bold'}}>Your Favorites</h2>      <br /><br />
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
