// Header.js
// Header.js
import React from 'react';
import '../App.css'; // Import your App.css file

function Header() {
  const handleScrollToProductCards = () => {
    // Assuming you want to scroll to the product cards section
    const productCardsSection = document.getElementById('product-cards');
    productCardsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">Choose from a variety of products & Enjoy fast and reliable shipping straight to your doorstep in no time!</h1>
          <button className="shop-now-button" onClick={handleScrollToProductCards}>Shop Now</button>
        </div>
        <div className="header-image">
          <img
            src="/Free Photo _ Front view of cyber monday shopping cart with bags and copy space (1).jpeg"
            alt="Shopping Cart"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
