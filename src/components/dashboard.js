import React from "react";
import BookList from "./booklist";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="main-content">
      <section className="welcome-section">
        <h1>Welcome back, Reader!</h1>
        <p>Discover your next favorite book</p>
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
