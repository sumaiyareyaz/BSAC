// components/bookcard.jsx
import React, { useState } from "react";
import "../styles/bookcard.css";

export default function BookCard({ title, author, image }) {
  const [showPopup, setShowPopup] = useState(false);

  const cardStyle = {
    width: "240px",         // fixed card width
    textAlign: "center",
    margin: "10px",
    cursor: "pointer",
    position: "relative",
    overflow: "visible",    // allow popup outside the card
  };

  const imgStyle = {
    width: "100%",
    height: "340px",        // image height (adjust if you want it taller/shorter)
    objectFit: "cover",
    borderRadius: "8px",
    transition: "transform 0.25s ease",
  };

  return (
    <div
      className="book-card"
      style={cardStyle}
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <img src={image} alt={title} className="book-image" style={imgStyle} />
      <h3>{title}</h3>
      <p>{author}</p>

      {showPopup && (
        <div className="book-popup">
          <img src={image} alt={title} />
          <div className="popup-info">
            <h4>{title}</h4>
            <p>{author}</p>
            <button>Read More</button>
          </div>
        </div>
      )}
    </div>
  );
}
