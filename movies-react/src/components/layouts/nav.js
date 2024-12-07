import React, { useState } from "react";
import logo from "../../assets/images/GoMovies.png";
import searchIcon from "../../assets/images/search.png";
import closeIcon from "../../assets/images/close.png";
import menuIcon from "../../assets/images/menu.png";
import menuCloseIcon from "../../assets/images/menu-close.png";
import { Link } from 'react-router-dom';


function Nav() {
  const [searchText, setSearchText] = useState(""); 

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchText(""); 
  };

  return (
    <header className="custom-header">
  <a href="../" className="logo-link">
    <img src={logo} alt="MovieMaze home" width="140" height="32" />
  </a>

  <div className="search-container">
  <Link to={`/search/${searchText}`}>
  <img
    src={searchIcon}
    width="24"
    height="24"
    alt="search"
    className="search-icon"
  />
</Link>
    <input
      type="text"
      name="search"
      aria-label="search movies"
      placeholder="Search movies..."
      autoComplete="off"
      className="search-input"
      value={searchText}
      onChange={handleSearchChange}
    />
   {searchText && (
  <button 
    className="clear-search-btn" 
    onClick={handleClearSearch}
    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }} // Ensure it stays at the correct position
  >
    <img
      src={closeIcon}
      width="24"
      height="24"
      alt="clear search box"
    />
  </button>
)}

  </div>
</header>

  );
}

export default Nav;
