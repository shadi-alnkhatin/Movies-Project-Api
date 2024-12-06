import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

export default function MovieDetails() {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/movie/${id}`) 
      .then((response) => {
        console.log(response.data.data);
        setMovie(response.data.data.movie); 
        setGenres(response.data.data.genres);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching movie details:', err);
        setError('Failed to fetch movie details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="container" id="container">

            <div className="movie-detail">
                <div className="backdrop-image"  style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w1280/${movie.poster_url}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></div>

                <figure className="poster-box movie-poster">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_url}`} alt=" poster" className="img-cover"/>
                </figure>

                <div className="detail-box">
                  <div className="detail-content">
                    <h1 className="heading">{movie.title}</h1>

                    <div className="meta-list">
                      <div className="meta-item">
                        <img src="{{asset('assets')}}/images/star.png" width="20" height="20" alt="rating"/>
                        <span className="span">4.4</span>

                      </div>

                      <div className="separator"></div>

                      <div className="meta-item">{movie.duration}m</div>

                      <div className="separator"></div>

                      <div className="meta-item">{movie.release_year}</div>


                       <div className="separator"></div>
                       {/* @auth
                       @if(Auth::user()->hasFavorited($movie))
                           <form action="{{ route('favorites.remove', $movie->id) }}" method="POST" style="display:inline;">
                               @csrf
                               @method('DELETE')
                               <button type="submit" className="favorite" style="z-index: 1000; display: absolute;">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                       <path fill="red" fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                   </svg>
                               </button>

                           </form>
                       @else
                           <form action="{{ route('favorites.add', $movie->id) }}" method="POST" style="display:inline;">
                               @csrf
                               <button type="submit"  className="favorite" style="z-index: 1000; display: absolute;">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                       <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                   </svg>
                               </button>
                           </form>
                       @endif
                       @endauth */}
                    </div>

                    <p className="genre">
                        {
                            genres.map((genre, index) => {
                                return <span key={index}>{genre.name}, </span>;
                            })
 
                        }
                    </p>
                    <p className="overview">{movie.description}</p>

                  </div>

                  <div className="title-wrapper">
                    <h3 className="title-large">Trailers and Clips</h3>
                  </div>

                  <div className="slider-list">

                    <div className="slider-inner">
                        <iframe width="700" height="500" src={movie.trailer_url}
                        frameborder="0" allowfullscreen="1" title="Trailer" className="" loading="lazy"></iframe>
                    </div>

                  </div>
                </div>
            </div>

      </section>
  );
}
