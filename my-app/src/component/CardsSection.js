import React from "react";
import { Link } from "react-router-dom";

function CardsSection({ title, products, onAddToCart }) {
  return (
    <div className="mb-5">
      <h3 className="text-center mt-4">{title}</h3>
      <div className="d-flex flex-row flex-wrap justify-content-center gap-4 mt-4 px-3">
        {products.map((product, index) => (
          <div key={index} className="text-center border rounded p-3" style={{ width: "250px" }}>
            <Link to={`/details?name=${product.name}`}>
              <img
                src={product.image}
                alt={product.name}
                width="200px"
                height="200px"
                className="img-fluid mb-2"
              />
            </Link>
            <p className="fw-bold">{product.name}</p>
            <p className="text-muted">{product.reviews}</p>
            <p className="fw-semibold">{product.rs}</p>
            <button className="btn btn-outline-secondary w-100" onClick={onAddToCart}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsSection;
