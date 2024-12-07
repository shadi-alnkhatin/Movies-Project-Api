import React, { useState } from "react";
import logo from "../../assets/images/moviemaze-high-resolution-logo-transparent.png";
import searchIcon from "../../assets/images/search.png";
import closeIcon from "../../assets/images/close.png";
import menuIcon from "../../assets/images/menu.png";
import menuCloseIcon from "../../assets/images/menu-close.png";

function Nav() {
  const [searchText, setSearchText] = useState(""); 

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchText(""); 
  };

  return (
    <header className="header" style={{ backgroundColor: "var(--surface)" }}>
      <a href="./ProfilePage" className="logo">
        <img src={logo} alt="MovieMaze home" width="140" height="32" />
      </a>

      <div className="search-box" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={searchIcon}
          width="24"
          height="24"
          alt="search"
          className="leading-icon"
          style={{ marginRight: '10px' }} 
        />
        <input
          type="text"
          name="search"
          aria-label="search movies"
          placeholder="Search any movies..."
          autoComplete="off"
          className="search-field"
          value={searchText}
          style={{ width: '200px' }} 
          onChange={handleSearchChange}
        />

        {searchText && (
          <button className="search-btn" onClick={handleClearSearch}  search-toggler>
            <img
              src={closeIcon}
              width="24"
              height="24"
              alt="close search box"
            />
          </button>
        )}
      </div>

      <button className="menu-btn" menu-btn menu-toggler>
        <img
          src={menuIcon}
          width="24"
          height="24"
          alt="open menu"
          className="menu"
        />
        <img 
          src={menuCloseIcon}
          width="24"
          height="24"
          alt="close menu"
          className="close"
        />
      </button>
    </header>
  );
}

export default Nav;
