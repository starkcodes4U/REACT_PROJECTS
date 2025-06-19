import React from "react";
import { products } from "../data";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <p>{p.name} - ${p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
