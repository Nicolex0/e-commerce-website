import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CategoryProducts from './components/CategoryProducts';
import FeedbackPage from './components/FeedbackPage';
import ContactPage from './components/ContactPage';
import CartPopup from './components/CartPopup';
import AddToCartNotification from './components/AddToCartNotification'; // Import the new component
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [addedItem, setAddedItem] = useState(null); // State to track added item

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setCategoryProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsSidebarOpen(false);
    setCategoryProducts(products.filter(product => product.category === category));
  };

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setAddedItem(product); // Set added item to display notification
  };

  const handleRemoveFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar toggleSidebar={setIsSidebarOpen} toggleCartPopup={() => setShowCartPopup(!showCartPopup)} />
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
                    id={product.id}
                    image={product.image}
                    description={product.title}
                    price={product.price}
                    onAddToCart={handleAddToCart}
                  />
                ))
              )}
            </div>
          } />
          <Route path="/category/:categoryName" element={<CategoryProducts />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} OneStopShop. All rights reserved.</p>
        </footer>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen} handleCategoryClick={handleCategoryClick} />
        <CartPopup
          isOpen={showCartPopup}
          togglePopup={() => setShowCartPopup(!showCartPopup)}
          items={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
        />
        {addedItem && <AddToCartNotification item={addedItem} />} {/* Add the notification component */}
      </div>
    </Router>
  );
}

export default App;
