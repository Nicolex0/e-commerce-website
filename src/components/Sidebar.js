import React, { useState, useEffect } from 'react';

function Sidebar({ isOpen, toggleSidebar, handleCategoryClick }) {
  const [categories, setCategories] = useState([]);

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

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={toggleSidebar}>&times;</button>
      </div>
      <div className="sidebar-content">
        <ul>
          <li>
            <a href="#categories" onClick={(e) => { e.preventDefault(); handleCategoryClick('electronics'); }}>Electronics</a>
          </li>
          <li>
            <a href="#categories" onClick={(e) => { e.preventDefault(); handleCategoryClick('jewelery'); }}>Jewelery</a>
          </li>
          <li>
            <a href="#categories" onClick={(e) => { e.preventDefault(); handleCategoryClick('men\'s clothing'); }}>Men's Clothing</a>
          </li>
          <li>
<a href="#categories" onClick={(e) => { e.preventDefault(); handleCategoryClick('women\'s clothing'); }}>Women's Clothing</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;