import React, { useState, useEffect } from 'react';

function Sidebar({ isOpen, toggleSidebar }) {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchCategoryProducts = async category => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await response.json();
      setCategoryProducts(data);
      setShowProducts(true);
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
    }
  };

  const handleCategoryClick = category => {
    setSelectedCategory(category);
    fetchCategoryProducts(category);
  };

  const handleCategoriesClick = () => {
    setShowCategories(!showCategories);
    setSelectedCategory('');
    setShowProducts(false);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={toggleSidebar}>&times;</button>
      </div>
      <div className="sidebar-content">
        <ul>
          <li>
            <a href="#categories" onClick={handleCategoriesClick}>Categories</a>
            {showCategories && (
              <ul className="sub-categories">
                {categories.map(category => (
                  <li key={category}>
                    <a
                      href={`#${category}`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li><a href="#account">Account</a></li>
          <li><a href="#help">Help & Support</a></li>
          <li><a href="#info">Information</a></li>
          <li><a href="#promotions">Promotions & Deals</a></li>
          <li><a href="#social">Social Links</a></li>
          <li><a href="#language">Language & Currency</a></li>
          <li><a href="#miscellaneous">Miscellaneous</a></li>
        </ul>
      </div>
      <div className="product-cards">
        {showProducts &&
          categoryProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <div className="product-details">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
