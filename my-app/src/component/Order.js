import React, { useEffect, useState } from "react";

const Order = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedOrder")) || [];
    setOrder(saved);
  }, []);

  const total = order.reduce((sum, item) => {
    const price = parseFloat((item.rs || "0").replace(/[^\d.]/g, ""));
    const qty = parseInt(item.quntity) || 0;
    return sum + price * qty;
  }, 0);

  function placeOrder() {
    alert("Order Placed Successfully!");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartCount");
    localStorage.removeItem("savedOrder");
    window.location.href = "/"; 
  }

  return (
    <div className="container mt-5 text-center">
      <h2>Confirm Your Order</h2>
      {order.length === 0 ? (
        <p>No items found!</p>
      ) : (
        <>
          <div className="mt-3">
            {order.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                <span>
                  {item.Title} ({item.quntity} pcs)
                </span>
                <span>{item.rs}</span>
              </div>
            ))}
          </div>
          <h4 className="mt-3">Total: ₹{total.toFixed(2)}</h4>
          <button className="btn btn-primary mt-3" onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Order;
