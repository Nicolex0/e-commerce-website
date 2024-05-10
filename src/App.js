import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      {/* Nav Bar */}
      <nav className="navbar">
        <div className="navbar-left">OneStopShop</div>
        <div className="navbar-center">
          <input type="text" placeholder="Search for product category" />
        </div>
        <div className="navbar-right">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#cart">Cart</a></li>
        </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="header">
        <img src="path_to_your_image.jpg" alt="Header Image" />
        <button>Shop Now</button>
      </header>

      {/* Product Cards */}
      <div className="product-cards">
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            description={product.title}
            price={product.price}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} OneStopShop. All rights reserved.</p>
      </footer>

      {/* Side Bar */}
      <div className="sidebar">
        {/* Add sidebar content here */}
      </div>
    </div>
  );
}

export default App;

