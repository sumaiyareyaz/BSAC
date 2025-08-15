// client/src/components/features.jsx
import React from "react";
import "../styles/features.css";

export default function Features() {
  const items = [
    { id: 1, title: "Trending Now", description: "Discover the most popular books today." },
    { id: 2, title: "New Arrivals", description: "Fresh picks added daily to our library." },
    { id: 3, title: "Editor's Picks", description: "Curated selections chosen by our team." },
  ];

  return (
    <div className="features-container">
      {items.map((item) => (
        <div key={item.id} className="feature-block">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
