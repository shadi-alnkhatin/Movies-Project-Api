import React, { useState, useEffect } from 'react';
import axios from 'axios';

// SidebarList Component
const SidebarList = ({ title, children }) => (
    <div className="sidebar-list text-light">
        {title && <p className="title">{title}</p>}
        {children}
    </div>
);

// Sidebar Component
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [genreList, setGenreList] = useState([]);  
    const [loading, setLoading] = useState(true);   
    const [error, setError] = useState(null);        
    const [activeLink, setActiveLink] = useState(null); 

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link); 
    };

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/genres')
            .then(response => {
                setGenreList(response.data.data || []); 
                setLoading(false);
            })
            .catch(error => {
                setError('Error loading genres');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <nav className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
                <div className="sidebar-inner">
                    <SidebarList title="Genre">
                        {genreList.length > 0 ? (
                            genreList.map((genre) => (
                                <a
                                    key={genre.id}
                                    href={`/movie/filter/${genre.id}`}
                                    className={`sidebar-link ${activeLink === genre.id ? 'active' : ''}`}
                                    onClick={() => handleLinkClick(genre.id)}
                                >
                                    {genre.name}
                                </a>
                            ))
                        ) : (
                            <p>No genres available</p>
                        )}
                    </SidebarList>

                    <SidebarList>
                        <a
                            href="/favorites"
                            className={`sidebar-link ${activeLink === 'favorites' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('favorites')}
                            style={{ color: "var(--primary-variant)" }}
                        >
                            Watch Later list
                        </a>
                    </SidebarList>

                    <SidebarList title="Account">
                        <a
                            href="/ProfilePage"
                            className={`sidebar-link ${activeLink === 'profile' ? 'active' : ''}`}
                            onClick={() => handleLinkClick('profile')}
                        >
                            Profile
                        </a>
                        <form method="POST" action="/logout">
                            <button
                                type="submit"
                                className={`sidebar-link ${activeLink === 'logout' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('logout')}
                            >
                                Logout
                            </button>
                        </form>
                    </SidebarList>
                </div>
            </nav>

            <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
        </div>
    );
};

export default Sidebar;