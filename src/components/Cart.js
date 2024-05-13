import React from 'react';

function Cart({ items }) {
  return (
    <div className="cart">
      <div className="cart-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M10 20c0 1.1.9 2 2 2s2-.9 2-2h5v-2h-2v-1.26c.64-.46 1.04-1.18 1.04-1.99C18 12.22 16.21 11 14 11s-4 1.22-4 2.75c0 .81.4 1.53 1.04 1.99V18H8v2h2zM3 4h4l2.79 8.37L5.62 17.4c-.43-.22-.62-.73-.43-1.17l1.3-2.2c.19-.32.54-.5.9-.5H15V8H7.71L6.9 5H3V4zm15 0h2v16h-2V4z"/>
        </svg>
        {items.length > 0 && <div className="cart-notification">{items.length}</div>}
      </div>
      <div className="cart-items">
        {items.map((item, index) => (
          <div key={index} className="cart-item">{item.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
