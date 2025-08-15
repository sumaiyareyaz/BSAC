// components/booklist.jsx
import React, { useState } from "react";
import BookCard from "./bookcard";
import "../styles/booklist.css";

import book1 from "../images/book1.jpeg";
import book2 from "../images/book2.jpeg";
import book3 from "../images/book3.jpeg";
import book4 from "../images/book4.jpeg";
import book5 from "../images/book5.jpeg";
import book6 from "../images/book6.jpeg";
import book7 from "../images/book7.jpeg";
import book8 from "../images/book8.jpeg";
import book9 from "../images/book9.jpeg";
import book10 from "../images/book10.jpeg";

const books = [
  { title: "When Only Love Remains", author: "Durjoy Dutta", image: book1 },
  { title: "Write Who You Are", author: "Unknown", image: book2 },
  { title: "Wuthering Heights", author: "Emily Brontë", image: book3 },
  { title: "Go to the Ruins", author: "Kate Atkinson", image: book4 },
  { title: "The Secret Lives of Colour", author: "Kassia St Clair", image: book5 },
  { title: "Into the Dark", author: "Clive Cussler", image: book6 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", image: book7 },
  { title: "1984", author: "George Orwell", image: book8 },
  { title: "Pride and Prejudice", author: "Jane Austen", image: book9 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: book10 },
];

export default function BookList({ title }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter books based on search
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="booklist-container">
      <h2>{title}</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search books..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Book Grid */}
      <div className="book-grid">
        {filteredBooks.map((book, idx) => (
          <BookCard key={idx} {...book} />
        ))}
      </div>
    </div>
  );
}
