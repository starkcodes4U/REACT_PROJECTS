import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? <p>No items in cart.</p> : (
        <div>
          {cart.map(item => (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <p>Qty: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
              <button onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}>+</button>
              <button onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}>-</button>
              <button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>Remove</button>
            </div>
          ))}
          <p><strong>Total: ${total}</strong></p>
          <button onClick={() => dispatch({ type: "CLEAR" })}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
