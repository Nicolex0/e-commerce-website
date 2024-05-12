import React from 'react';

function Navbar({ setShowSidebar }) {
  const handleShowSidebar = () => {
    setShowSidebar(true);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">OneStopShop</div>
      <div className="navbar-center">
        <input type="text" placeholder="Search for product category" />
      </div>
      <div className="navbar-right">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#profile">Profile</a></li>
          <li>
            <a href="#cart" onClick={handleShowSidebar}>
              Cart
              {/*
                Add notification badge here to indicate the number of items in the cart
                Example: <span className="badge">{cartItemCount}</span>
              */}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
