import React from "react";

import Tags from "./Tags";
import Slider from "./Slider";
import ShopConcern from "./ShopConcern";
import Image from "./Image";
import Shop from "./Shop";
import Banner from "./Banner";
import Certification from "./Certification";
import Blog from "./Blog";
import Knowing from "./Knowing";
import Email from "./Email";
import Contact from "./Contact";
import Popular from "./Popular";
import AllCardsData from "./AllCardsData";
import Lastcard from "./Lastcard";


const Home = () => {
  // const [cartCount, setcartCount] = useState(0);

  // function setcart(id) {
  //   const selectedProduct = product.find((item) => item.id === id);

  //   let existingCart = [];

  //   try {
  //     const cartData = JSON.parse(localStorage.getItem("productDetails"));
  //     if (Array.isArray(cartData)) {
  //       existingCart = cartData;
  //     }
  //   } catch (error) {
  //     console.error("Error parsing cart data:", error);
  //   }

  //   const updatedCart = [...existingCart, selectedProduct];

  //   localStorage.setItem("productDetails", JSON.stringify(updatedCart));
  //   localStorage.setItem("cartCount", updatedCart.length);

  //   setcartCount(updatedCart.length);
  // }


  return (
    <>
      <Tags/>
      <Slider />
      <ShopConcern />

      {/* <Lastcard/> */}
      {/* <h1>this is new product</h1>
      <div className="d-flex flex-row flex-wrap justify-content-center gap-4 mt-4 px-3">
      
        {product.map((img, index) => (
          <div
            key={index}
            className="text-center border rounded p-3"
            style={{ width: "250px" }}
          >
            <img
              src={img.image}
              alt={img.name}
              width="200px"
              height="200px"
              className="img-fluid mb-2"
            />
            <a href={img.url} className="text-decoration-none text-dark">
              <p className="fw-bold">{img.name}</p>
            </a>
            <p className="text-muted">{img.reviews}</p>
            <p className="fw-bold">{img.rs}</p>

           <div className="d-flex gap-2">
            <button className="btn btn-outline-secondary w-100" onClick={()=>viewdetails(product)}>View details</button>
             <button className="btn btn-outline-secondary w-100" onClick={()=>setcart(cart + 1)}>
              Add to Cart
            </button>
           </div>
          </div>
        ))}
      </div> */}

      {/* <h3 className="text-center mt-4">Skincare Essentials</h3>
      <div className="d-flex flex-row flex-wrap justify-content-center gap-4 mt-4 px-3">
        {product.slice(0, 4).map((img, index) => (
          <div
            key={index}
            className="text-center border rounded p-3"
            style={{ width: "250px" }}
          >
            <img
              src={img.image}
              alt={img.name}
              width="200px"
              height="200px"
              className="img-fluid mb-2"
            />
            <a href={img.url} className="text-decoration-none text-dark">
              <p className="fw-bold">{img.name}</p>
            </a>
            <p className="text-muted">{img.reviews}</p>
            <p className="fw-bold">{img.rs}</p>

            <div className="d-flex gap-2">
              <Link to={`/details?id=${img.id}`}>
                <button className="btn btn-outline-secondary">
                  View details
                </button>
              </Link>

              <button
                className="btn btn-outline-secondary "
                onClick={() => setcart(img.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-center mt-4">Shadow Suncream</h3>
      <div className="d-flex flex-row flex-wrap justify-content-center gap-4 mt-4 px-3">
        {product.slice(4, 8).map((img, index) => (
          <div
            key={index}
            className="text-center border rounded p-3"
            style={{ width: "250px" }}
          >
            <img
              src={img.image}
              alt={img.name}
              width="200px"
              height="200px"
              className="img-fluid mb-2"
            />
            <a href={img.url} className="text-decoration-none text-dark">
              <p className="fw-bold">{img.name}</p>
            </a>
            <p className="text-muted">{img.reviews}</p>
            <p className="fw-bold">{img.rs}</p>

            <div className="d-flex gap-2">
              <Link to="/details">
                <button className="btn btn-outline-secondary">
                  View details
                </button>
              </Link>
              <button
                className="btn btn-outline-secondary w-100"
                onClick={() => setcart(img.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div> */}
{/* <AllCardsData/>
 */}
 <Lastcard />
      <Image />
      <Shop />
      <Banner />
      <Certification />
      <Blog />
      <Knowing />
      <Email />
      <Contact />
      <Popular />
    </>
  );
};

export default Home;
