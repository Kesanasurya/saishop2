import React, { useEffect, useState } from "react";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const handlePay = () => {
    if (cart.length === 0) {
      alert("No items to pay");
      return;
    }
    alert(`Payment successful. Total: ₹${total}`);
    localStorage.removeItem("cart");
    setCart([]);
  };

  const handleCancel = () => {
    if (cart.length === 0) return;
    if (!window.confirm("Clear cart?")) return;
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">No items</p>
      ) : (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <span className="cart-item-name">{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))
      )}

      <div className="cart-total">
        To Pay: ₹{total}
      </div>

      <div className="cart-actions">
        <button className="pay-btn" onClick={handlePay}>Pay</button>
        <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default Cart;
