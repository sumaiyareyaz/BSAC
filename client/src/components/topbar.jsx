import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/topbar.css";

export default function Topbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="topbar">
        <div className="logo" onClick={() => navigate("/")}>
          📚 BookStory
        </div>

        <div className="nav-links">
          <div className="nav-item" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="nav-item" onClick={() => navigate("/history")}>
            History
          </div>
          <div className="nav-item" onClick={() => navigate("/category")}>
            Categories
          </div>
          <div className="nav-item premium">Premium</div>
          <div className="nav-item logout">Logout</div>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search books..." />
          <button>🔍</button>
          {/* Menu icon beside search bar */}
          <button className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Slide-out menu */}
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/browse")}>Browse Books</li>
          <li onClick={() => navigate("/track")}>Track Reading</li>
          <li onClick={() => navigate("/recommendations")}>Get Recommendation</li>
          <li onClick={() => navigate("/history")}>History</li>
          <li onClick={() => navigate("/category")}>Categories</li>
          <li onClick={() => navigate("/premium")}>Premium</li>
          <li onClick={() => navigate("/logout")}>Logout</li>
          <li onClick={() => navigate("/trending")}>Trending Books</li>
        </ul>
      </div>

      {/* Dark overlay */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}
