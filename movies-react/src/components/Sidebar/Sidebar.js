import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// SidebarList Component
const SidebarList = ({ title, children }) => (
    <div className="sidebar-list text-light">
        {title && <p className="title">{title}</p>}
        {children}
    </div>
);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path; 

  return (
    <div>
      {/* Button to toggle the sidebar */}
 <button
  className="sidebar-toggle-btn"
  onClick={toggleSidebar}
  style={{
    backgroundColor: isOpen ? '#28a745' : '#2b3a4a', // Green when open, Red when closed
    color:  'white',
    zIndex:'100',
    padding: '1px 5px ',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, left 0.3s ease', // Add transition for positioning
    position: 'sticky',
    left: isOpen ? 'calc(100% - 120px)' : '10px',
  }}
>
  {isOpen ? '←' : '→ '}
</button>

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
            <a
              href="/filter/7"
              className={`sidebar-link ${isActive('/filter/7') ? 'active' : ''}`}
            >
              Crime
            </a>
          </SidebarList>

          <SidebarList>
            <a
              href="/favorites"
              className={`sidebar-link ${isActive('/favorites') ? 'active' : ''}`}
              style={{ color: 'var(--primary-variant)' }}
            >
              Watch Later List
            </a>
          </SidebarList>

          <SidebarList title="Account">
            <a
              href="/profile/edit"
              className={`sidebar-link ${isActive('/profile/edit') ? 'active' : ''}`}
            >
              Profile
            </a>
            <form method="POST" action="/logout">
              <button
                type="submit"
                className={`sidebar-link ${isActive('/logout') ? 'active' : ''}`}
              >
                Logout
              </button>
            </form>
          </SidebarList>
        </div>
      </nav>

      <div
        className={`overlay ${isOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
};

export default Sidebar;
