import React from "react";
import { Link } from "react-router-dom";
import "../styles/topbar.css";

export default function Layout({ children }) {
  return (
    <div>
      <header className="topbar">
        {/* Logo + Search on the left */}
        <div className="left-section">
          <div className="logo-container">
            <img src="/logo.jpg" alt="Bookstory Logo" className="logo-img" />
            <h1 className="logo-text">The Bookstory</h1>
          </div>

          {/* Search bar */}
          <div className="search-bar">
            <input type="text" placeholder="Search books..." />
            <button>Search</button>
          </div>
        </div>

        {/* Navigation on the right */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
          <Link to="/category">Categories</Link>
          <Link to="/to-be-read">To Be Read</Link>
          <Link to="/premium">Premium</Link>
          <Link to="/logout">Logout</Link>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
