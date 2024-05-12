import React from 'react';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={toggleSidebar}>&times;</button>
      </div>
      <div className="sidebar-content">
        <ul>
          <li><a href="#categories">Categories</a></li>
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
