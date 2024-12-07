import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';
import star from '../assets/images/star.png';
import CommentSection from './CommentSection';
import RingLoader from "react-spinners/ClipLoader";




const FavoriteButton = ({ isFavorited, onClick }) => {
  
  if (isFavorited){
   return (<button onClick={onClick} class="favorite" style={{zIndex: '1000', display: 'absolute'}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill="red" fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
              </svg>
    </button>);
  }
  else{
    return ( <button onClick={onClick}  class="favorite" style={{zIndex: '1000', display: 'absolute'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
      </svg>
  </button>)
  }

};

export default function MovieDetails() {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isFavorite, setIsFavorite] = useState(false);

  const token = localStorage.getItem('authToken');
  if (!token) {
    window.location.href = "../login";
  }

  const handleFavoriteClick = async () => {
    try {
      setIsFavorite((prev) => !prev);
      let token=localStorage.getItem('authToken');
      console.log(token);
      if(!isFavorite) {
      await axios.post(
        `http://localhost:8000/api/add-favorite/${id}`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`   ,
          },
        }
      );}
      else{
        await axios.post(
          `http://localhost:8000/api/remove-favorite/${id}`,
          {},
          {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          }
        );
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  useEffect(() => {
    // Define an async function to handle the requests
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        // Fetch movie details
        const movieResponse = await axios.get(`http://127.0.0.1:8000/api/movie/${id}`);
        console.log(movieResponse.data.data);
        setMovie(movieResponse.data.data.movie); 
        setGenres(movieResponse.data.data.genres);
  
        // Fetch favorite status
        const favoriteResponse = await axios.get(`http://127.0.0.1:8000/api/has-fav/${id}}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        console.log(favoriteResponse.data.has_favorited,"Fav");
        setIsFavorite(favoriteResponse.data.has_favorited);  // Update favorite status
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch movie details or favorite status.');
      } finally {
        setLoading(false);  // Stop loading when all requests are complete
      }
    };
  
    // Call the async function
    fetchData();
  }, [id]);  
  

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
                    <div className='fav-details'>
                    <h1 className="heading">{movie.title}</h1> 
        <div >
        <FavoriteButton
          isFavorited={isFavorite}
           onClick={handleFavoriteClick} 
        />
      </div>
                    </div>
                    <div className="meta-list">
                      <div className="meta-item">
                        <img src={star} width="20" height="20" alt="rating"/>
                        <span className="span card-badge">4.4</span>

                      </div>

                      <div className="separator"></div>

                      <div className="meta-item card-badge">{movie.duration}m</div>

                      <div className="separator"></div>

                      <div className="meta-item card-badge">{movie.release_year}</div>
                       
     
                       
                    </div>
 {/* Favorite Button */}
      
                    <p className="genre">
                        {
                            genres.map((genre, index) => {
                                return <span key={index}>{genre.name}, </span>;
                            })
 
                        }
                    </p>
                    <p className="overview my-5">{movie.description}</p>

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
              <CommentSection movieId={movie.id}></CommentSection>
      </section>
  );
}
