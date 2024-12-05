// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import './components/Sidebar/Sidebar.css';

import "./assets/css/style.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Sidebar/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
