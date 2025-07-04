import React from "react";
import { Link } from "react-router-dom";
import products from "./products.json";

const Home = () => {
return (
<div style={{ padding: "2rem" }}>
<h2>Product List</h2>
<ul>
{products.map((prod) => (
<li key={prod.id}>
<Link to={`/products/${prod.id}`}>{prod.title}</Link>
</li>
))}
</ul>
</div>
);
};

export default Home;