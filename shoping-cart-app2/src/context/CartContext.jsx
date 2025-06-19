// src/context/CartContext.jsx
import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.payload);

    case "INCREMENT":
      return state.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

    case "DECREMENT":
      return state.map(item =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = product => dispatch({ type: "ADD_TO_CART", payload: product });
  const removeFromCart = id => dispatch({ type: "REMOVE_FROM_CART", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });
  const increment = id => dispatch({ type: "INCREMENT", payload: id });
  const decrement = id => dispatch({ type: "DECREMENT", payload: id });

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
