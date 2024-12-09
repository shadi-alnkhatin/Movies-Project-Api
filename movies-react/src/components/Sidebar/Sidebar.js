import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; 

// SidebarList Component
const SidebarList = ({ title, children }) => (
    <div className="sidebar-list text-light">
        {title && <p className="title">{title}</p>}
        {children}
    </div>
);

const handelLogout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('name');
  window.location.href='../';
}

const isLogin = () => {
  if(localStorage.getItem('authToken'))
    return true;
  else
    return false;
}

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation(); // Get the current location
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 
  }, []);

  const isActive = (path) => location.pathname === path; 

  return (
    <div>
      {/* <button
        className="sidebar-toggle-btn"
        onClick={toggleSidebar}
        style={{
          backgroundColor: isOpen ? '#2b3a4a' : '#2b3a4a', 
          color: 'white',
          display: 'flex',
          justifyContent: isOpen ? 'flex-end' : 'flex-start',
          alignItems: 'center',
          padding: '4px',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: '100',
          transition: 'background-color 0.3s ease, left 0.3s ease', 
          position: 'absolute', 
          left: isOpen ? 'calc(100% - 120px)' : '10px', 
        }}
      >
        {isOpen ? '← ' : '→ '}
      </button> */}
      <nav className={`sidebar ${isOpen ? 'active' : ''}`} id="sidebar">
        <div className="sidebar-inner">
          <SidebarList title="Genre">
            <a
              href="/filter/1"
              className={`sidebar-link ${isActive('/filter/1') ? 'active' : ''}`}
            >
              Action
            </a>
            <a
              href="/filter/2"
              className={`sidebar-link ${isActive('/filter/2') ? 'active' : ''}`}
            >
              Romance
            </a>
            <a
              href="/filter/3"
              className={`sidebar-link ${isActive('/filter/3') ? 'active' : ''}`}
            >
              Drama
            </a>
            <a
              href="/filter/4"
              className={`sidebar-link ${isActive('/filter/4') ? 'active' : ''}`}
            >
              Adventure
            </a>
            <a
              href="/filter/5"
              className={`sidebar-link ${isActive('/filter/5') ? 'active' : ''}`}
            >
              Fantasy
            </a>
            <a
              href="/filter/6"
              className={`sidebar-link ${isActive('/filter/6') ? 'active' : ''}`}
            >
              Comedy
            </a>
            
          </SidebarList>

          {isLogin() && (
            <SidebarList>
              <a
                href="/favorites"
                className={`sidebar-link ${isActive('/favorites') ? 'active' : ''}`}
                style={{ color: 'var(--primary-variant)' }}
              >
                Watch Later List
              </a>
            </SidebarList>
          )}

          {isLogin() && (
            <SidebarList title="Account">
              <a
                href="/profile"
                className={`sidebar-link ${isActive('/profile') ? 'active' : ''}`}
              >
                Profile
              </a>
              <button
                onClick={handelLogout}
                className={`sidebar-link ${isActive('/logout') ? 'active' : ''}`}
              >
                Logout
              </button>
            </SidebarList>
          )}
        </div>
      </nav>

      <div
        className={`overlay ${isOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
};

export default Sidebar;