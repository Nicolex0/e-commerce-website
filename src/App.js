import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Navbar from './components/Navbar'; // Import Navbar
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  const [products, setProducts] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      {/* Nav Bar */}
      <Navbar setShowSidebar={setShowSidebar} /> {/* Pass setShowSidebar as a prop */}

      {/* Header */}
      <Header />

      {/* Product Cards */}
      <div id="product-cards" className="product-cards">
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
      {showSidebar && <Sidebar />}
    </div>
  );
}

export default App;
