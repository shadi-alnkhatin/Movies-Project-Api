import React from 'react';
import "./Home.css";
import MovieCard from '../MovieCard/MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  const actionMovies = ["Action Movie 1", "Action Movie 2", "Action Movie 3" , "Action Movie 4" , "Action Movie 5", "Action Movie 6", "Action Movie 6"];
  const romanceMovies = ["Romance Movie 1", "Romance Movie 2", "Romance Movie 3"];
  const dramaMovies = ["Drama Movie 1", "Drama Movie 2", "Drama Movie 3"];

  return (
    <div className="app">
      <section className="container">
        {/* Carousel Section */}
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://t3.ftcdn.net/jpg/06/62/88/84/360_F_662888417_FMXrcGIeFkfHIdmOnUfFIcEQYKQoWCne.jpg" className="d-block w-100 h-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/028/274/915/small/strong-athletic-male-fighter-view-from-the-back-photo.jpg" className="d-block w-100 h-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src="https://c4.wallpaperflare.com/wallpaper/619/789/88/action-cyborg-film-movie-wallpaper-preview.jpg" className="d-block w-100 h-100" alt="Slide 3" />
            </div>
          </div>
        </div>

        <br />
        <h2 className="my-5">Action</h2>
        <div className="slider-list">
          <div className="slider-inner">
            {actionMovies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </div>

        <br />
        <h2 className="my-5">Romance</h2>
        <div className="slider-list">
          <div className="slider-inner">
            {romanceMovies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </div>

        <h2 className="my-5">Drama</h2>
        <div className="slider-list">
          <div className="slider-inner">
            {dramaMovies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
