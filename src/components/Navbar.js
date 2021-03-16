import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <Link className="nav-item" to="/">Home </Link>
    <Link className="nav-item" to="/calculator">Calculator </Link>
    <Link className="nav-item" to="/quote">Quote</Link>
  </div>
);

export default Navbar;
