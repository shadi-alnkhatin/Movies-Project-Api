import React, { memo, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import "./assets/css/style.css";
import Register from "./components/Register";
import Login from "./components/Login";
import MovieCard from "./components/MovieCard";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";
import Sidebar from "./components/Sidebar/Sidebar";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import MovieDetails from "./components/MovieDetails";
import SearchResult from "./components/ResultSearch/ResultSearch";
import AboutUs from "./components/AboutUs/AboutUs";
import MoviesFilterResults from "./components/MoviesFilterResults";
import TermsAndConditions from "./components/TermsAndConditions";

import Nav from "./components/layouts/nav"; 
import ProfilePage from './components/ProfilePage';  
import ProfilePass from './components/ProfilePass'; 


function App() {
  const location = useLocation();

  const showSidebar = location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/contact' && location.pathname !== '/TermsAndConditions' && location.pathname !== '/AboutUs';
  const showHome = location.pathname === '/';
  const sidebar = useMemo(() => <Sidebar />, []);

  return (
      <div>
        {showSidebar&&<Nav/>}
          <main>
          {showSidebar && sidebar} {/* Sidebar stays static */}
          {showHome && <Home />}
          <Routes>
          <Route path="/search" element={<SearchResult />} />

                  <Route path="/movie/:id" element={<MovieDetails />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/filter/:id" element={<MoviesFilterResults/>} />
                  <Route path="/search/:searchText" element={<SearchResult/>} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/change-password" element={<ProfilePass />} />

          </Routes>
          </main>
          <Routes>
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
                  <Route path="/AboutUs" element={<AboutUs />} />
                  <Route path="/contact" element={<Contact />} />
          </Routes>
      <Footer />

 
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