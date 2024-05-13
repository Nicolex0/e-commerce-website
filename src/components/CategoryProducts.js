import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function CategoryProducts({ category }) {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetchCategoryProducts(category);
  }, [category]);

  const fetchCategoryProducts = async category => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await response.json();
      setCategoryProducts(data);
    } catch (error) {
      console.error(`Error fetching products for category ${category}:`, error);
    }
  };

  return (
    <div className="category-products">
      <h2>Products in {category}</h2>
      <div className="product-cards">
        {categoryProducts.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            description={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;