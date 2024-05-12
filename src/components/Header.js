import React from 'react';
import '../App.css'; // Import your App.css file

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">Enjoy fast and reliable shipping straight to your door, so you can start enjoying your new finds in no time!</h1>
        </div>
        <div className="header-image">
          <img
            src="/Free Photo _ Front view of cyber monday shopping cart with bags and copy space (1).jpeg"
            alt="Shopping Cart"
          />
        </div>
      </div>
      <button className="shop-now-button">Shop Now</button>
    </header>
  );
}

export default Header;

