import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHistory, FaStar, FaSignOutAlt, FaHome, FaList } from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="nav-left">
        <Link to="/" className="logo">📚 BookStory</Link>

        {/* Search Bar */}
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search books..." />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/" className="nav-item"><FaHome /> Home</Link>
        <Link to="/categories" className="nav-item"><FaList /> Categories</Link>
        <Link to="/premium" className="nav-item"><FaStar /> Premium</Link>
        <Link to="/history" className="nav-item"><FaHistory /> History</Link>
        <Link to="/logout" className="nav-item logout"><FaSignOutAlt /> Logout</Link>
      </nav>
    </header>
  );
}
