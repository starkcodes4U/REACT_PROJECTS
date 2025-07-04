import React, { useState, useEffect, useRef } from "react";
import productsData from "./products.json";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const debounceRef = useRef(null);

  useEffect(() => {
    setProducts(productsData);
    setFiltered(productsData);
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      let result = [...products];

      if (search) {
        result = result.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      if (category !== "All") {
        result = result.filter((p) => p.category === category);
      }

      if (minPrice !== "") {
        result = result.filter((p) => p.price >= parseFloat(minPrice));
      }

      if (maxPrice !== "") {
        result = result.filter((p) => p.price <= parseFloat(maxPrice));
      }

      setFiltered(result);
    }, 300);
  }, [search, category, minPrice, maxPrice, products]);

  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  return (
    <div className="container">
      <h2>Product List</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <ul>
        {filtered.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price} ({product.category})
          </li>
        ))}
        {filtered.length === 0 && <p>No matching products.</p>}
      </ul>
    </div>
  );
};

export default ProductList;
