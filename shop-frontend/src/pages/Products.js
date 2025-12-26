import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";

const staticProducts = [
  { id: 1, name: "Murukulu", price: 500 },
  { id: 2, name: "Pabbillalu", price: 500 },
  { id: 3, name: "Sunnundalu", price: 600 },
  { id: 4, name: "Nuvvulundalu", price: 500 },
  { id: 5, name: "Shakharpara", price: 500 },
  { id: 6, name: "Chickies", price: 450 },
  { id: 7, name: "Ravva Laddu", price: 500 },
  { id: 8, name: "Kajikayalu", price: 500 },
  { id: 9, name: "Sajja Vadalu", price: 500 },
  { id: 10, name: "Dry Fruit Laddu", price: 1200 },
  { id: 11, name: "Protein Laddu", price: 1100 }
];

function Products() {
  const [products] = useState(staticProducts);

  const addToCart = (product, qty) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += qty;
    } else {
      cart.push({ ...product, quantity: qty });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${qty} Kg added to cart`);
  };

  return (
    <div className="products-container">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
