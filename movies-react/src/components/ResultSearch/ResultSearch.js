import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";  
import axios from "axios";
import { useParams } from "react-router-dom";

const SearchResult = () => {
  const { searchText } = useParams();  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchText) {
      setLoading(true);  
     axios.get(`http://localhost:8000/api/movies?search=${searchText}`).then(
      response=>{
         setMovies(response.data.data.movies) ;
         setLoading(false);
      }
     )
    } else {
      setMovies([]); 
    }
  }, [searchText]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="genre-list movie-list">
      <div id="start" className="title-wrapper">
        <h2 className="title">Search Result</h2>
      </div>
      {movies.length > 0 ? (
        <div className="grid-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />  
          ))}
        </div>
      ) : (
        <h1 className="heading">There are no films based on your search text 😥</h1>
      )}
    </div>
  );
};

export default SearchResult;
