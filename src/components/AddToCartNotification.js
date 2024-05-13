import React, { useEffect, useState } from 'react';

function AddToCartNotification({ item }) {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setShowNotification(true);

    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 2000); // Notification will disappear after 2 seconds

    return () => clearTimeout(timer);
  }, [item]);

  return (
    <div className={`add-to-cart-notification ${showNotification ? 'show' : ''}`}>
      <p>{item.title} added to cart</p> {/* Use the correct property of the item */}
    </div>
  );
}

export default AddToCartNotification;
