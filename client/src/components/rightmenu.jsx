import React, { useState } from "react";
import "./RightMenu.css";
import { FaBars, FaTimes } from "react-icons/fa";

const RightMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="right-menu-container">
      {/* Menu Icon beside search box */}
      <button className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Slide-out Menu */}
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Browse Books</li>
          <li>Track Reading</li>
          <li>Get Recommendation</li>
          <li>History</li>
          <li>Categories</li>
          <li>Premium</li>
          <li>Logout</li>
          <li>Trending Books</li>
        </ul>
      </div>

      {/* Background Overlay */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default RightMenu;
