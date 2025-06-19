// src/pages/Cart.jsx
import React from "react";
// Cart.jsx
import './cart.css';

import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increment, decrement, removeFromCart, clearCart } = useCart();

  const getTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
  <h2 className="cart-title">Your Shopping Cart</h2>
  {cart.map(item => (
    <div className="cart-item" key={item.id}>
      <div className="item-info">
        <h3>{item.name}</h3>
        <p>Price: ₹{item.price}</p>
        <p>Total: ₹{item.price * item.quantity}</p>
      </div>
      <div className="item-controls">
        <button onClick={() => decrement(item.id)} disabled={item.quantity <= 1}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => increment(item.id)}>+</button>
        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  ))}
  <p className="total">Grand Total: ₹{getTotal()}</p>
  <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
</div>

  );
};

export default Cart;
