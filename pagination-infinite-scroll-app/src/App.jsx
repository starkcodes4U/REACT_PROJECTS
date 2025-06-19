import { BrowserRouter as Router } from "react-router-dom";
import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>🛒 Infinite Scroll Shop</h1>
        <ProductList />
      </div>
    </Router>
  );
};

export default App;