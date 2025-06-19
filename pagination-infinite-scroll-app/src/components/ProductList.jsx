import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import CategoryTabs from "./CategoryTabs";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState("all");

  const observer = useRef();
  const loaderRef = useRef();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const url = `https://dummyjson.com/products${category !== "all" ? "/category/" + category : ""}?limit=6&skip=${(page - 1) * 6}`;
      const res = await fetch(url);
      const json = await res.json();
      const data = json.products || [];
      if (data.length === 0) setHasMore(false);
      setProducts((prev) => [...prev, ...data]);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, category]);

  useEffect(() => {
    const observerCb = (entries) => {
      if (entries[0].isIntersecting && hasMore && !loading) {
        setPage((prev) => prev + 1);
      }
    };
    const obs = new IntersectionObserver(observerCb);
    if (loaderRef.current) obs.observe(loaderRef.current);

    return () => obs.disconnect();
  }, [loading, hasMore]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setProducts([]);
    setPage(1);
    setHasMore(true);
  };

  return (
    <>
      <CategoryTabs onChange={handleCategoryChange} selected={category} />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {loading && <Loader />}
      <div ref={loaderRef} />
    </>
  );
};

export default ProductList;