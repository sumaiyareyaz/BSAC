import React from "react";
import { Link } from "react-router-dom";
import "../styles/topbar.css";

export default function Layout({ children }) {
  return (
    <div>
      <header className="topbar">
        <h1 className="logo">The Bookstory</h1>
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
