import React, { useState } from "react";
import product from "./Finalcard";
import { Link, useNavigate } from "react-router-dom";

function Lastcard() {
  const navigate = useNavigate();
  const [cartCount, setcartCount] = useState(
    JSON.parse(localStorage.getItem("cartCount")) || 0
  );

  let totalCost;

  function setcart(product) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      alert(" Please login or signup to add items to cart!");
      navigate("/signup"); 
      return;
    }

    let existingCart = [];
    let cost = localStorage.getItem("cost");

    totalCost = cost ? +product.rs + +cost : +product.rs;

    localStorage.setItem("cost", totalCost);

    try {
      const cartData = JSON.parse(localStorage.getItem("cartItems"));
      if (Array.isArray(cartData)) existingCart = cartData;
    } catch (error) {
      console.error("Error parsing cart data:", error);
    }

    const updatedCart = [...existingCart, product];

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    localStorage.setItem("cartCount", updatedCart.length);

    setcartCount(updatedCart.length);
  }

  return (
    <>
      <h4 className="text-center mt-3 mb-4">All Products</h4>

      <div className="container">
        <div className="row g-3">
          {product.map((key, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card shadow-sm p-2 h-100">
                <img
                  src={key.image}
                  className="card-img-top"
                  alt={key.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Link
                  to={`/detail?id=${key.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{key.name}</h5>
                    <h6 className="mb-2">₹{key.rs}</h6>
                  </div>
                </Link>

                <button
                  className="btn btn-info w-100"
                  onClick={() => setcart(key)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Lastcard;
