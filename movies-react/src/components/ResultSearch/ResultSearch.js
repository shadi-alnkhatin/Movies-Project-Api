import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";  

const SearchResult = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchQuery) {
      setLoading(true);  
      fetch(`http://localhost:3000/api/movies?search=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching movies:", error);
          setLoading(false);
        });
    } else {
      setMovies([]); 
    }
  }, [searchQuery]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="genre-list movie-list">
      <div id="start" className="title-wrapper">
        <h2 className="heading">Search Result</h2>
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
