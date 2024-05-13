import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CategoryProducts from './components/CategoryProducts';
import FeedbackPage from './components/FeedbackPage';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsSidebarOpen(false); // Close the sidebar when a category is clicked
  };

  return (
    <Router>
      <div className="App">
        <Navbar toggleSidebar={setIsSidebarOpen} />
        <Header />
        <Routes>
          <Route exact path="/" element={
            <div id="product-cards" className="product-cards">
              {selectedCategory ? (
                <CategoryProducts category={selectedCategory} products={categoryProducts} />
              ) : (
                products.map((product) => (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    description={product.title}
                    price={product.price}
                  />
                ))
              )}
            </div>
          } />
          <Route path="/category/:categoryName" element={<CategoryProducts />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} OneStopShop. All rights reserved.</p>
        </footer>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen} handleCategoryClick={handleCategoryClick} />
      </div>
    </Router>
  );
}

export default App;