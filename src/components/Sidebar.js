import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="cart">
        <h3>Shopping Cart</h3>
        {/* Cart items go here */}
        <div className="total">Total: $0.00</div>
        <button className="checkout-btn">Place Order & Proceed to Checkout</button>
      </div>
      <div className="order-history">
        <h3>Order History</h3>
        {/* Order history items go here */}
      </div>
    </div>
  );
}

export default Sidebar;
