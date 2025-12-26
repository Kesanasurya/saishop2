import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div style={{ border: "1px solid #ea7a7aff", borderRadius: 8, padding: 12, marginBottom: 12 }}>
      <h3 style={{ margin: "0 0 8px" }}>{product.name}</h3>
      <p style={{ margin: "0 0 12px" }}>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
