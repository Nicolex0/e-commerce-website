import React from 'react';

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
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#feedback">Feedback</a></li>
          <li className="cart-icon"><a href="#cart">&#128722;</a></li>
          <li className="menu-icon" onClick={toggleSidebar}><span className="menu-text">&#9776;</span></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

