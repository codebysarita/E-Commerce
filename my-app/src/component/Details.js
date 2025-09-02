import React from "react";
import product from "./Finalcard";
import Tags from "./Tags";
import Addquantity from "./Addquantity";
import { Link } from "react-router-dom";

function Details() {
  // Get "id" from URL query parameters
  const queryParams = new URLSearchParams(window.location.search);
  const id = parseInt(queryParams.get("id")); // Convert to number
  const productDetails = localStorage.getItem("productDetails");
  console.log("Product Details:", productDetails);

  return (
    <div>
      <Tags />
      <div className="d-flex p-5">
        <ul>
          {product
            .filter((img) => img.id === id)
            .map((img, index) => {
              return (
                <li
                  key={index}
                  className="d-flex flex-column align-items-center"
                >
                  <Link to="/detail/${product.id}">
                    <img
                      src={img.image}
                      alt={img.name}
                      style={{ width: "300px", height: "300px" }}
                    />
                    <h3>{img.name}</h3>
                    <p>{img.category}</p>
                    <p>{img.rs}</p>
                    <p>{img.reviews}</p>
                  </Link>
                </li>
              );
            })}
        </ul>

        {/* <Addquantity /> */}
      </div>
    </div>
  );
}

export default Details;
