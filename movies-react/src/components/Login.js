import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      }
      if (error.response && error.response.data.error) {
        setMessage(error.response.data.error);
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <span className="input-group-text">
                <FaEnvelope />
              </span>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            {errors.email && (
              <div className="text-danger">{errors.email[0]}</div>
            )}
            <div className="input-group">
              <span className="input-group-text">
                <FaLock />
              </span>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            {errors.password && (
              <div className="text-danger">{errors.password[0]}</div>
            )}
            <button type="submit" className="btn">
              Login
            </button>
          </form>
          {message && (
            <div
              className={`alert ${
                message === "Login successful!"
                  ? "alert-success"
                  : "alert-danger"
              }`}
            >
              {message}
            </div>
          )}
          {token && (
            <div className="mt-3">
              <strong>Token:</strong> {token}
            </div>
          )}
          <div className="mt-3 text-center">
            <p>
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
