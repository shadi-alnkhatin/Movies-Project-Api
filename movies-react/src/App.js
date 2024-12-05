import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Landing/Landing';
import Home from './Home/Home';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (

    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/Home" element={<Home />} /> 

      </Routes>
    </div>
  </Router>
  );
}

export default App;
