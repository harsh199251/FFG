import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import css from './Navbar.css'
import Button from "./Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useNavigate
} from "react-router-dom";


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Token exists, check if it's expired
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
      if (decodedToken.exp < currentTime) {
        // Token expired, remove it from local storage and set isLoggedIn to false
        localStorage.removeItem('token');
        setIsLoggedIn(false);
      } else {
        // Token not expired, set isLoggedIn to true
        setIsLoggedIn(true);
      }
    } else {
      // Token doesn't exist, set isLoggedIn to false
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    setIsLoggedIn(false);
    // Redirect to the login page
    navigate('/');
  };

  return (
    <nav id="navbar">
      <div id="logo">
        <img src="https://moonlit-pithivier-51e278.netlify.app/static/media/lg.e2fffa5c2964d9ac5d05.webp" alt="Logo" />
      </div>
      <ul>
        <li className="item"><a href="/">Home</a></li>
        <li className="item"><a href="/safety">Safety</a></li>
        <li className="item"><a href="/whyus">Why us</a></li>
        <li className="item"><a href="/franchise">Franchise</a></li>
      </ul>
      <div className="but">
        {isLoggedIn ? (
          <Link to="/adminbaaji">
            <button className="btn">Form Data</button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn">Admin Login</button>
          </Link>
        )}
        {isLoggedIn && (
          <button className="btn" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
