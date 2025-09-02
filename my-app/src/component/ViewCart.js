// import React, { useState, useEffect } from "react";
// import Tags from "./Tags";

// const ViewCart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const removeFromCart = (id) => {
//     // setCartItems(cartItems.filter((item) => item.id !== id));
//     // return localStorage.removeItem("cart");
//     setCartItems(cartItems.filter((item) => item.id !== id));
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     localStorage.setItem("cartItems", JSON.stringify(updatedCart));
//     localStorage.setItem("cartCount", updatedCart.length);
//     // console.log("Updated Cart:", updatedCart);
//     alert("Item removed from cart");

//     return;
//   };

//   useEffect(() => {
//     const storedCart = localStorage.getItem("cartItems");
//     if (storedCart) {
//       try {
//         const parsedCart = JSON.parse(storedCart);
//         if (Array.isArray(parsedCart)) {
//           setCartItems(parsedCart);
  //       } else {
  //         setCartItems([]);
  //       }
  //     } catch (err) {
  //       console.error("Error parsing cart data", err);
  //       setCartItems([]);
  //     }
  //   }
  // }, []);
  // function add(item) {
  //   let count = cartCount.length;
  //   count = count + 1;
  //   console.log(count);
  //   return count;
  // }

  // const cartCount = cartItems.length;

  // localStorage.setItem("cartCount", cartCount);
  // function add(item) {
    // Get existing cart from localStorage or start with empty array
    // let cartItemsAll = localStorage.getItem("cartItems");
    // let cartItems = cartItemsAll ? JSON.parse(cartItemsAll) : [];

    // Check if item already exists in the cart
    // const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    // if (existingItem) {
      // If exists, increment quantity
    //   existingItem.quntity = parseInt(existingItem.quntity) + 1;
    // } else {
      // If not exists, add new item with quantity 1
    //   item.quntity = 1;
    //   cartItems.push(item);
    // }

    // Save updated cart back to localStorage
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  //   localStorage.setItem("cartCount", cartItems.length);

  //   console.log("Updated Cart:", cartItems);
  //   alert("Item added to cart");
  // }

//  function add(item) {
//     let existingCart = cartItems;
//     const index = existingCart.findIndex((cartItem) => cartItem.id === item.id);
//     if (index !== 1) {
//       existingCart.push(index, 1);
//       localStorage.setItem("cartItems", JSON.stringify(existingCart));
//       localStorage.setItem("cartCount", existingCart.length);
//       setCartItems([...existingCart]);
//       console.log("Updated Cart:", existingCart);
//       alert("Item add from cart");
//     }
//     return;
//   }

  
  // function sub(item) {
  //   let existingCart = cartItems;
  //   const index = existingCart.findIndex((cartItem) => cartItem.id === item.id);
  //   if (index !== -1) {
  //     existingCart.splice(index, 1);
  //     localStorage.setItem("cartItems", JSON.stringify(existingCart));
  //     localStorage.setItem("cartCount", existingCart.length);
  //     setCartItems([...existingCart]);
  //     console.log("Updated Cart:", existingCart);
  //     alert("Item removed from cart");
  //   }
  //   return;
  // }

  // const total = cartItems.reduce(
  //   (sum, item) => sum + (parseFloat(item.rs) || 0),
  //   0
  // );

  // console.log("CartItems in ViewCart:", total);
  // function qty(){
  //   if (item.id===item.id) {
  //     localStorage.setItem("qty",item.length)
  //   }

  // }

//   return (
//     <>
//       <Tags cart={cartItems.length} />
//       <div style={{ padding: "20px" }}>
//         <h2>Your Cart</h2>
//         {cartItems.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <div className="cart-items mt-4 d-flex flex-column gap-3">
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   padding: "10px 0",
//                 }}
//               >
//                 {item.image && (
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     style={{ width: "200px", marginRight: "10px" }}
//                   />
//                 )}
//                 <div>
//                   <h4 style={{ color: "blue" }}>{item.Title}</h4>
//                   <p>{item.name}</p>
//                   <p>Price: {item.rs}</p>
//                 </div>
//                 <div className="d-flex  gap-2 mx-3">
//                   <button className="btn btn-warning" onClick={() => add(item)}>
//                     +
//                   </button>
//                   <button className="btn btn-warning">
//                     {cartItems.filter((i) => i.id === item.id).length || 1}
//                     {/* {cartItems+1} */}
//                   </button>

//                   <button className="btn btn-warning" onClick={() => sub(item)}>
//                     -
//                   </button>
//                   <button
//                     className="btn btn-info"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <div className="mx-3 text-center">
//         <h5>Total Price: {total.toFixed(2)}</h5>
//       </div>
//     </>
//   );
// };

// export default ViewCart;
