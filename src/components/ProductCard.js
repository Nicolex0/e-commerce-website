import React from 'react';

function ProductCard({ id, image, description, price, onAddToCart }) {
  const handleAddToCart = () => {
    const product = {
      id,
      image,
      description,
      price
    };

    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <img src={image} alt={description} />
      <div className="product-details">
        <p><span className="bold">Description:</span> {description}</p>
        <p><span className="bold">Price:</span> ${price}</p>
      </div>
      <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;