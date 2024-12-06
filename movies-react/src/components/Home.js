import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import cover1 from "../assets/images/cover10.jpg";
import cover2 from "../assets/images/cover1.jpg";
import cover3 from "../assets/images/cover2.jpg";

function Home() {
  const [moviesByGenre, setMoviesByGenre] = useState({
    action: [],
    romance: [],
    drama: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/movies') 
      .then((response) => {
        const all = response.data|| [];
        console.log(all.data.Drama, 'Drama');

        const actionMovies =all.data.Action;
        const romanceMovies = all.data.Romance;
        const dramaMovies = all.data.Drama;
        console.log(actionMovies,"Action");

        setMoviesByGenre({
          action: actionMovies,
          romance: romanceMovies,
          drama: dramaMovies,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setError('Fail loading movies');
        setLoading(false);
      });
  }, []);

  
  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;

  return (

      <section className="container">
         {/* Carousel Section */}
         <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-indicators">
            <button 
              type="button" 
              data-bs-target="#carouselExampleControls" 
              data-bs-slide-to="0" 
              className="active" 
              aria-current="true" 
              aria-label="Slide 1"></button>
            <button 
              type="button" 
              data-bs-target="#carouselExampleControls" 
              data-bs-slide-to="1" 
              aria-label="Slide 2"></button>
            <button 
              type="button" 
              data-bs-target="#carouselExampleControls" 
              data-bs-slide-to="2" 
              aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={cover1} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={cover2} className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={cover3} className="d-block w-100" alt="Slide 3" />
            </div>
          </div>
        </div>

        <br />
        <h2 className="my-5">Action</h2>
        <div className="slider-list">
          <div className="slider-inner">
            {moviesByGenre.action.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>

        <br />
        <h2 className="my-5">Romance</h2>
        <div className="slider-list">
          <div className="slider-inner">
            {moviesByGenre.romance.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>

        <br />
        <h2 className="my-5">Drama</h2>
        <div className="slider-list">
          <div className="slider-inner">
            {moviesByGenre.drama.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    
  );
}

export default Home;