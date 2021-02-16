import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">The Drive</Link>
      <Link to="/user" className="navbar__link">Profile</Link>
    </nav>
  )
}

export default Navbar;
