import React, { memo, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import "./assets/css/style.css";
import Register from "./components/Register";
import Login from "./components/Login";
import MovieCard from "./components/MovieCard";

import Favorites from "./components/Favorites";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import ResultSearch from './components/ResultSearch/ResultSearch';
import SearchResult from "./components/ResultSearch/ResultSearch";
import MoviesFilterResults from "./components/MoviesFilterResults";
import { initializeToggles } from "./assets/toggleHandler";

import Nav from "./components/layouts/nav"; 
import ProfilePage from './components/ProfilePage';  
import ProfilePass from './components/ProfilePass'; 
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  const location = useLocation();
  const showSidebar = location.pathname !== '/login' && location.pathname !== '/register';
  const showHome = location.pathname === '/';
  const sidebar = useMemo(() => <Sidebar />, []);



  return (
      <div>
        <Nav />
          <main>
          {showSidebar && sidebar} {/* Sidebar stays static */}
          {showHome && <Home />}
          <Routes>
          <Route path="/search" element={<SearchResult />} />

                  <Route path="/movie/:id" element={<MovieDetails />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/filter/:id" element={<MoviesFilterResults/>} />
                  <Route path="/search/:searchText" element={<SearchResult/>} />

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
