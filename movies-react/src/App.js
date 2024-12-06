
import React from 'react';
import './App.css';
import "./assets/css/style.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LandingPage from './components/Landing';
import Home from './components/Home';
import Register from "./components/Register";
import Login from "./components/Login";
import MovieCard from "./components/MovieCard";
import Sidebar from "./components/Sidebar/Sidebar";
import './components/Sidebar/Sidebar.css';


function App() {
  return (

    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/MovieCard" element={<MovieCard />} /> 
        <Route path="/Sidebar" element={<Sidebar/>}/>
      </Routes>
    </div>
  </Router>

  );
}

export default App;