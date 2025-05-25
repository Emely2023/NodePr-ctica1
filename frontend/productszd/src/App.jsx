import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Employees from "./pages/Employees";
import Providers from "./pages/Providers";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/products" element={<Product />} />
        <Route path="/employees" element={<Employees />} />
         <Route path="/providers" element={<Providers />} />
      </Routes>
    </Router>
  );
}

export default App;
