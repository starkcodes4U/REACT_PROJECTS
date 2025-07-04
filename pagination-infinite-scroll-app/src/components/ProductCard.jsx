import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} height="150" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;