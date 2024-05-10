import React from 'react';

function ProductCard({ id, image, description, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={description} />
      <div className="product-details">
        <p><span className="bold"></span> {id}</p>
        <p><span className="bold"></span> {description}</p>
        <p><span className="bold">Price:</span> ${price}</p>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ProductCard;

