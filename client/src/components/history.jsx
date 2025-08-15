import React from "react";
import BookCard from "./bookcard";
import "../styles/booklist.css";

import history1 from "../images/book16.jpeg";
import history2 from "../images/book17.jpeg";
import history3 from "../images/book18.jpeg";
import history4 from "../images/book19.jpeg";

const books = [
  { title: "One Arranged Murder", author: "Chetan Bhagat", image: history1 },
  { title: "2 States", author: "Chetan Bhagat", image: history2 },
  { title: "The Girl in Room 105", author: "Chetan Bhagat", image: history3 },
  { title: "One Indian Girl", author: "Chetan Bhagat", image: history4 },
];

export default function History() {
  return (
    <div className="booklist-container">
      <h2>History</h2>
      <div className="book-grid">
        {books.map((book, idx) => (
          <BookCard key={idx} {...book} />
        ))}
      </div>
    </div>
  );
}
