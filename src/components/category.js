import React from "react";

const allBooks = [
  { title: "When Only Love Remains", author: "Durjoy Dutta", category: "Romance" },
  { title: "Write Who You Are", author: "Unknown", category: "Self-Help" },
  { title: "Wuthering Heights", author: "Emily Brontë", category: "Classic" },
  { title: "Go to the Ruins", author: "Kate Atkinson", category: "Adventure" },
  { title: "The Secret Lives of Colour", author: "Kassia St Clair", category: "Non-Fiction" },
  { title: "Into the Dark", author: "Clive Cussler", category: "Thriller" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", category: "Classic" },
  { title: "1984", author: "George Orwell", category: "Dystopian" },
  { title: "Pride and Prejudice", author: "Jane Austen", category: "Romance" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Classic" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Classic" },
  { title: "Moby-Dick", author: "Herman Melville", category: "Adventure" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", category: "Fantasy" },
  { title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling", category: "Fantasy" },
];

// Add more categories to fill up the grid
const extraCategories = [
  "Biography",
  "Philosophy",
  "Science Fiction",
  "Mystery",
  "Historical",
  "Poetry",
  "Self-Improvement",
  "Business",
  "Travel",
  "Art",
];

const allCategories = [
  ...new Set(allBooks.map(book => book.category)),
  ...extraCategories,
];

const categoryIcons = {
  Romance: "💖",
  "Self-Help": "🧘",
  Classic: "📚",
  Adventure: "🏞️",
  "Non-Fiction": "📖",
  Thriller: "🕵️‍♂️",
  Dystopian: "🌆",
  Fantasy: "🧙‍♂️",
  Biography: "👤",
  Philosophy: "🤔",
  "Science Fiction": "🚀",
  Mystery: "🕵️‍♀️",
  Historical: "🏰",
  Poetry: "📝",
  "Self-Improvement": "🌱",
  Business: "💼",
  Travel: "✈️",
  Art: "🎨",
};

const baseColor = "#f5f0e6";

export default function CategoryTabs() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "20px",
        padding: "30px",
        minHeight: "100vh",
        backgroundColor: "#faf7f0",
      }}
    >
      {allCategories.map(category => (
        <div
          key={category}
          style={{
            backgroundColor: baseColor,
            color: "#5a4d41",
            fontWeight: "600",
            fontSize: "1.1rem",
            borderRadius: "12px",
            height: "140px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            userSelect: "none",
            cursor: "pointer",
            boxShadow: "0 3px 8px rgba(90, 77, 65, 0.2)",
            transition: "transform 0.3s ease, filter 0.3s ease",
            textAlign: "center",
            padding: "0 10px",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.filter = "brightness(1.1)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "brightness(1)";
          }}
        >
          <div style={{ fontSize: "2rem" }}>
            {categoryIcons[category] || "📁"}
          </div>
          <div>{category}</div>
        </div>
      ))}
    </div>
  );
}
