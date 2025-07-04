import React from 'react';
import './ProductCard.css'; // Import external CSS

const ProductCard = ({ title = "Default Product", price = 0, description = "No description available." }) => {
  const inlineStyle = {
    border: '1px solid black',
    padding: '16px',
    margin: '10px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  return (
    <div style={inlineStyle} className="product-card">
      <h2 className="product-title">{title}</h2>

      <p className="product-price">Price: ${price}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default ProductCard;
