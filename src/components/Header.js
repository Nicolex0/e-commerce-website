import React from 'react';
import '../App.css'; // Import your App.css file

function Header() {
  return (
    <header className="header">
      <img
        src="/Free Photo _ Front view of cyber monday shopping cart with bags and copy space (1).jpeg"
        alt="Cyber Monday Header"
        className="header-image"
      />
      <div className="shop-now-button-container">
        <button className="shop-now-button">Shop Now</button>
      </div>
    </header>
  );
}

export default Header;
