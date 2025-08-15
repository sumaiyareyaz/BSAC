import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/topbar";
import Dashboard from "./components/dashboard";
import BookList from "./components/booklist";
import History from "./components/history"; // ✅ default import
import "./styles/App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/browse" element={<BookList title="Browse Books" />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}
