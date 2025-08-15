import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "History", path: "/history" },
    { name: "Category", path: "/category" },
    { name: "To Be Read", path: "/toberead" },
    { name: "Premium", path: "/premium" },
    { name: "Log Out", path: "/logout" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "20px",
        backgroundColor: "#222",
        minHeight: "100vh",
        width: "220px",
      }}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          style={{
            backgroundColor: "#333",
            color: "white",
            padding: "14px",
            textAlign: "center",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "8px",
            transition: "all 0.2s ease-in-out",
            display: "block",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#444";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#333";
            e.target.style.transform = "scale(1)";
          }}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
