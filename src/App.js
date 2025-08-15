import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./components/dashboard";
import History from "./components/history";
import Category from "./components/category";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Layout>
    </Router>
  );
}
