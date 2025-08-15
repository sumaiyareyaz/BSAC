// components/dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import BookList from "./booklist";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="main-content">
      <section className="welcome-section">
        <h1>Welcome back, Reader!</h1>
        <p>Discover your next favorite book</p>
      </section>

      <section className="info-cards">
        <Link to="/browse" className="info-card">
          <h3>Browse Books</h3>
          <p>Explore thousands of titles across all genres.</p>
        </Link>
        <div className="info-card">
          <h3>Track Reading</h3>
          <p>Keep track of books you've read and want to read.</p>
        </div>
        <div className="info-card">
          <h3>Get Recommendations</h3>
          <p>Receive suggestions tailored to your taste.</p>
        </div>
      </section>

      <section className="trending-section">
        <h2>Trending Books</h2>
        <div className="trending-scroll">
          <BookList title="" />
        </div>
      </section>
    </div>
  );
}

<section className="trending-section">
  <h2>Trending Books</h2>
  <div className="trending-scroll">
    <BookList title="" />
  </div>
</section>
