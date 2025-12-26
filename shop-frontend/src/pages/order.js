import { useState } from "react";
import api from "../services/api";

function Order() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = async () => {
    if (!name.trim() || price === "") {
      alert("Please provide product name and price");
      return;
    }

    const payload = { name, price: parseFloat(price) };

    try {
      await api.post("/products", payload);
      alert("Product added");
      setName("");
      setPrice("");
    } catch (err) {
      console.error(err);
      alert("Failed to add product");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Order Panel</h2>
      <input
        placeholder="Product name"
        value={name}
        onChange={e => setName(e.target.value)}
      /><br /><br />
      <input
        placeholder="Price"
        type="number"
        value={price}
        onChange={e => setPrice(e.target.value)}
      /><br /><br />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default Order;
