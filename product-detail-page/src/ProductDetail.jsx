import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "./products.json";

const ProductDetail = () => {
const { id } = useParams();
const navigate = useNavigate();
const product = products.find((p) => p.id === id);

if (!product) return <p>Product not found.</p>;

return (
<div style={{ padding: "2rem" }}>
<p>
<a href="/">Home</a> / {product.title}
</p>
<h2>{product.title}</h2>
<img src={product.image} alt={product.title} width={200} />
<p><strong>Price:</strong> ${product.price}</p>
<p>{product.description}</p>
<p><strong>Stock:</strong> {product.stock}</p>
<button onClick={() => navigate(-1)}>Go Back</button>
</div>
);
};

export default ProductDetail;