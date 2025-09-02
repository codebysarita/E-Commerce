// import React from "react";
// import { Link } from "react-router-dom";
// import AllProduct from "./AllProduct";

// function AllCardsData({ addToCart }) {
//   return (
//     <div className="container mt-4 px-3">
//       <div className="row d-flex flex-wrap justify-content-center gap-4">
//         {AllProduct.map((carElm) => (
//           <div className="col-md-3 mb-4" key={carElm.id}>
//             <div
//               className="text-center border rounded p-3"
//               style={{ width: "250px" }}
//             >
//               <img
//                 src={carElm.image}
//                 alt={carElm.name}
//                 width="200"
//                 height="200"
//                 className="img-fluid mb-2"
//               />
//               <a href={carElm.url} className="text-decoration-none text-dark">
//                 <p className="fw-bold">{carElm.name}</p>
//               </a>
//               <p className="text-muted">{carElm.reviews}</p>
//               <p className="fw-bold">{carElm.rs}</p>

//               <div className="d-flex gap-2">
//                 <Link to={`/details?id=${carElm.id}`}>
//                   <button className="btn btn-outline-secondary">
//                     View details
//                   </button>
//                 </Link>

//                 <button
//                   className="btn btn-outline-secondary"
//                   onClick={() => addToCart(carElm)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AllCardsData;
