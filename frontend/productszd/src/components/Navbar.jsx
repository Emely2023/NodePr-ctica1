import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Si deseas personalizar estilos

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Zona Digital Emely</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/products" activeclassname="active">Products</NavLink>
        </li>
        <li>
          <NavLink to="/employees" activeclassname="active">Employees</NavLink>
        </li>
        <li>
          <NavLink to="/providers" activeclassname="active">Providers</NavLink>
        </li>
      </ul>
    </nav>
  );
}



export default Navbar;
