import React from "react";
import BookCard from "./bookcard";
import "../styles/bookcard.css";

function BookRow({ title, books }) {
  return (
    <div className="book-row">
      <h2>{title}</h2>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
}

export default BookRow;

