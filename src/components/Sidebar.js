import React, { useState, useEffect } from 'react';

function Sidebar({ isOpen, toggleSidebar }) {
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

  const [showCategories, setShowCategories] = useState(true); // Set to true by default

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={toggleSidebar}>&times;</button>
      </div>
      <div className="sidebar-content">
        <ul>
          <li onClick={toggleCategories}>
            <a href="#categories">Categories</a>
            {showCategories && (
              <ul className="sub-categories">
                {categories.map(category => (
                  <li key={category}>
                    <a href={`#${category}`}>{category}</a>
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
    </div>
  );
}

export default Sidebar;
