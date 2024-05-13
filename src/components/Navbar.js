import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ toggleSidebar, toggleCartPopup }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">OneStopShop</Link>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li className="cart-icon" onClick={toggleCartPopup}><a href="#cart">&#128722;</a></li>
          <li className="menu-icon" onClick={toggleSidebar}><span className="menu-text">&#9776;</span></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
