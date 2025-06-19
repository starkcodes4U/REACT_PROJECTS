import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

import { CartProvider } from "./context/CartContext";

import { WishlistProvider } from "./context/WishlistContext";

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
            <Link to="/">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/wishlist">Wishlist ❤️</Link>
          </nav>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
