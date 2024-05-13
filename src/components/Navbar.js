import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        OneStopShop
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li> {/* Use Link instead of a */}
          <li><Link to="/about">About</Link></li> {/* Use Link instead of a */}
          <li><Link to="/contact">Contact Us</Link></li> {/* Use Link instead of a */}
          <li><Link to="/feedback">Feedback</Link></li> {/* Use Link instead of a */}
          <li className="cart-icon"><a href="#cart">&#128722;</a></li>
          <li className="menu-icon" onClick={toggleSidebar}><span className="menu-text">&#9776;</span></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
