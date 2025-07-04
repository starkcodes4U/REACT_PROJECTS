import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <div className="card">
      <img src={product.image} alt={product.name} height="100" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => dispatch({ type: "ADD", payload: product })}>
          Add to Cart
        </button>
        <button onClick={() => toggleWishlist(product)}>
          {isInWishlist(product.id) ? <FaHeart color="red" /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
