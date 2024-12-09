import React, { useState } from "react";
import logo from "../../assets/images/GoMovies.png";
import searchIcon from "../../assets/images/search.png";
import closeIcon from "../../assets/images/close.png";
import menuIcon from "../../assets/images/menu.png";
import menuCloseIcon from "../../assets/images/menu-close.png";
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

function Nav() {
  const [searchText, setSearchText] = useState(""); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchText(""); 
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  return (
    <div style={{
      width:'100%',
    }}>
      <header className="custom-header">
        <a href="../" className="logo-link">
          <img src={logo} alt="MovieMaze home" width="140" height="32" />
        </a>
        <div className="search-bar-container" style={{ display: 'flex'}}>
  <div className="search-container" style={{ flexGrow: 1,}}>
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
      style={{ width: '100%' }}
    />
    {searchText && (
      <button 
        className="clear-search-btn" 
        onClick={handleClearSearch}
        style={{
          position: 'relative',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
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

  <button
    className="sidebar-toggle-btn"
    onClick={toggleSidebar}
    style={{
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease', 

    }}
  >
    {isSidebarOpen ? (
      <img
      style={{marginLeft:'200px'}}
        src={menuCloseIcon}
        width="24"
        height="24"
        alt="open menu"
        className="menu-icon"
      />
    ) : (
      <img
      style={{marginLeft:'200px'}}
        src={menuIcon}
        width="24"
        height="24"
        alt="close menu"
        className="menu-icon"
      />
    )}
  </button>
</div>

      </header>
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
    </div>
  );
}

export default Nav;