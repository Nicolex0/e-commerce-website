import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="navbar">
        <div className="toggle-btn" onClick={toggleSidebar}>
          <i className={`fas ${isSidebarOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
        </div>
        <ul>
          <li><a href="#cart">Cart Items</a></li>
          <li><a href="#checkout">Checkout</a></li>
          <li><a href="#order-history">Order History</a></li>
        </ul>
      </div>
      {/* Add cart items, checkout, and order history sections here */}
    </div>
  );
}

export default Sidebar;
