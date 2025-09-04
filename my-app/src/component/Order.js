import React, { useEffect, useState } from "react";
import Tags from "./Tags";
const Order = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedOrder")) || [];
    setOrder(saved);
  }, []);

  const total = order.reduce((sum, item) => {
    const price = parseFloat((item.rs || "0").replace(/[^\d.]/g, ""));
    const qty = parseInt(item.quntity) || 1;
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
    <>
    <Tags/>
    <div className="container mt-5 text-center" style={{border:"2px solid orange",gap:"2px"}}>
      <h2  style={{color:"#53109aff"}}>Confirm Your Order</h2>
      {order.length === 0 ? (
        <p>No items found!</p>
      ) : (
        <>
          <div className="mt-3 " >
            {order.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #d8bf19ff",
                  padding: "10px",
                }}
              >
                <div className="text-center">
                  {item.title} 
                ({item.quntity} item)
                </div>
                {/* <span>({item.rs*item.quntity}rs)</span> */}
                <div style={{fontSize:"20px",color:"tomato"}}>{item.name}</div>
              </div>
            ))}
          </div>
          <h4 className="mt-3">Total: ₹{total.toFixed(2)}</h4>
          <button className="btn btn-primary m-3" onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
    </>
  );
};

export default Order;
