import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import "./assets/css/style.css";
import Register from "./components/Register";
import Login from "./components/Login";
import MovieCard from "./components/MovieCard";

import Favorites from "./components/Favorites";
import Sidebar from "./components/Sidebar/Sidebar";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Nav from "./components/layouts/nav"; 
import ProfilePage from './components/ProfilePage';  
import ProfilePass from './components/ProfilePass'; 


function App() {
  const location = useLocation();
  const showSidebar = location.pathname !== '/login' && location.pathname !== '/register';
  const showHome = location.pathname === '/';

  return (
      <div>
        <Nav />
        <main>
          {showSidebar && <Sidebar />}

          {showHome && <Home />}
          <Routes>
 
                   
        
         

                                    <Route path="/ProfilePage" element={<ProfilePage />} />
                   <Route path="/ProfilePass" element={<ProfilePass />} />
                  <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
          </main>
          <Routes>
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
          </Routes>
 
      </div>
  );
}

export default function WrappedApp() {
  return (
      <Router>
          <App />
      </Router>
  );
}
