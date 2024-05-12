import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />
      <Header />
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
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} OneStopShop. All rights reserved.</p>
      </footer>
      <Sidebar isOpen={showSidebar} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
