import React, { useEffect, useState } from "react";

const CategoryTabs = ({ onChange, selected }) => {
  const [categories, setCategories] = useState(["all"]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();

        // ensure all items are strings
        const validCategories = data.filter((cat) => typeof cat === "string");
        setCategories(["all", ...validCategories]);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="category-tabs">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={selected === cat ? "active" : ""}
        >
          {typeof cat === "string" ? cat.toUpperCase() : ""}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
