import React, { useState, useEffect } from "react";
import Tags from "./Tags";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        } else {
          setCartItems([]);
        }
      } catch (err) {
        console.error("Error parsing cart data", err);
        setCartItems([]);
      }
    }
  }, []);


  const add = (item) => {
    setCartItems((prev) => {
      const updated = (() => {
        const existing = prev.find((i) => i.id === item.id);
        if (existing) {
          return prev.map((i) =>
            i.id === item.id
              ? { ...i, quantity: (i.quantity ? parseInt(i.quantity) : 0) + 1 }
              : i
          );
        } else {
          return [...prev, { ...item, quantity: 1 }];
        }
      })();

      localStorage.setItem("cartItems", JSON.stringify(updated));
      localStorage.setItem(
        "cartCount",
        updated.reduce((acc, i) => acc + (i.quantity ? parseInt(i.quantity) : 0), 0)
      );

      return updated;
    });
  };

  
  const sub = (item) => {
    setCartItems((prev) => {
      const updated = prev
        .map((i) =>
          i.id === item.id
            ? { ...i, quantity: (i.quantity ? parseInt(i.quantity) : 1) - 1 }
            : i
        )
        .filter((i) => i.quantity > 0);

      localStorage.setItem("cartItems", JSON.stringify(updated));
      localStorage.setItem(
        "cartCount",
        updated.reduce((acc, i) => acc + (i.quantity ? parseInt(i.quantity) : 0), 0)
      );

      return updated;
    });
  };


  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    localStorage.setItem(
      "cartCount",
      updatedCart.reduce((acc, i) => acc + (i.quantity ? parseInt(i.quantity) : 0), 0)
    );
    alert("Item removed from cart");
  };

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat((item.rs || "1").replace(/[^\d.]/g, ""));
    const qty = item.quantity ? parseInt(item.quantity) : 1;
    return sum + price * qty;
  }, 0);

  const userString = localStorage.getItem("currentUser");
  const user = userString ? JSON.parse(userString) : null;

  
  function goToConfirmPage() {
    localStorage.setItem("savedOrder", JSON.stringify(cartItems));
    navigate("/order");
  }

  return (
    <>

      <Tags
        cart={cartItems.reduce((acc, i) => acc + (i.quantity ? parseInt(i.quantity) : 0), 0)}
      />

      <div
        className="text-center mt-5"
        style={{ padding: "20px", border: "2px solid orange " }}
      >
        <h2>Your Cart {user ? user.name : ""}</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items mt-4 d-flex flex-column gap-3">
            {cartItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 0",
                }}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "200px", marginRight: "10px" }}
                  />
                )}
                <div>
                  <h4 style={{ color: "blue" }}>{item.Title}</h4>
                  <p>{item.name}</p>
                  <p>Price: {item.rs}</p>
                </div>
                <div className="d-flex gap-2 mx-3">
                  <button className="btn btn-warning" onClick={() => add(item)}>
                    +
                  </button>
                  <button className="btn btn-warning">
                    {item.quantity ? parseInt(item.quantity) : 1}
                  </button>
                  <button className="btn btn-warning" onClick={() => sub(item)}>
                    -
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="d-flex align-items-center justify-content-center mt-4">
          <div className="mx-3 text-center">
            <h5>Total Price: ₹{total.toFixed(2)}</h5>
          </div>
          <div>
            <button className="btn btn-success" onClick={goToConfirmPage}>
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
