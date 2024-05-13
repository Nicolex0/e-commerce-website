// CartPopup.js
import React from 'react';

function CartPopup({ isOpen, togglePopup, items, onRemoveFromCart }) {
  return (
    <div className={`cart-popup ${isOpen ? 'open' : ''}`}>
      <div className="cart-items">
        {items.map((item, index) => (
          <div key={index} className="cart-item">
            <span className="bold">{item.description}</span> - ${item.price} x {item.quantity}
            <button className="remove-from-cart" onClick={() => onRemoveFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        Total: ${items.reduce((total, item) => total + item.price * item.quantity, 0)}
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
      <button className="close-popup" onClick={togglePopup}>Close</button>
    </div>
  );
}

export default CartPopup;
