import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Register.css";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  if (localStorage.getItem('authToken')) {
    window.location.href = "../";
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({});
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setMessage("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        formData
      );
      setMessage("Login successful!");
      setToken(response.data.token);

      const token = response.data.data.token;
      console.log(`token: ${token}`);
      console.log(`name: ${response.data.data.name}`);
      

      if (token) {
        localStorage.setItem("authToken", token); 
        localStorage.setItem("name", response.data.data.name);
        window.history.back();
      }
      

    } catch (error) {
      if (error.response) {
        if (error.response.data.errors) {
          setErrors(error.response.data.errors);
        } else if (error.response.data.error) {
          setMessage(error.response.data.error); 
        } else {
          setMessage("Invalid email or password.");
        }
      } else {
        setMessage("Something went wrong. Please try again."); 
      }
    }
  };

  return (
    <div className="register">
    <div className="card2">
      <div className="right">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email[0]}</p>}
  
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          /> {message && (
            <p
              style={{ color: message === "Login successful!" ? "#28a745" : "#dc3545", fontSize: '18px'
              }} 
              className={`error ${message === "Login successful!" ? "success" : ""}`}
            >
              {message}
            </p>
          )}
          {errors.password && <p className="error">{errors.password[0]}</p>}
          <div  className="btn-register" >
          <button  type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          </div>
        </form>

       

        <div className="text-center mt-3">
          <p style={{color:'#121826'}}>
            Don't have an account?{" "}
            <Link to="/register" className="text-primary">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  
  );
  
};

export default Login;