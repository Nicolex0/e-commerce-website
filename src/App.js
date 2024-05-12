import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchCategoryProducts = async category => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await response.json();
      setCategoryProducts(data);
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
    }
  };

  const handleCategoryClick = category => {
    setSelectedCategory(category);
    fetchCategoryProducts(category);
  };

  return (
    <div className="App">
      <Navbar handleCategoryClick={handleCategoryClick} />
      <Header />
      <div id="product-cards" className="product-cards">
        {selectedCategory ? (
          categoryProducts.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              description={product.title}
              price={product.price}
            />
          ))
        ) : (
          products.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              description={product.title}
              price={product.price}
            />
          ))
        )}
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} OneStopShop. All rights reserved.</p>
      </footer>
      <Sidebar />
    </div>
  );
}

export default App;
