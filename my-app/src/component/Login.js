// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const users = JSON.parse(localStorage.getItem("users") || "[]");
//     const user = users.find((u) => u.email === email && u.password === password);

//     if (user) {
//       localStorage.setItem("currentUser", JSON.stringify(user));
//       setMessage("Login successful!");
//       setTimeout(() => {
//         navigate("/"); // redirect to home / products page
//       }, 1000);
//     } else {
//       setMessage("Invalid email or password");
//     }

//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
//       <form
//         onSubmit={handleSubmit}
//         style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", width: "300px" }}
//       >
//         <h3 style={{ textAlign: "center" }}>Login</h3>
//         {message && <p style={{ textAlign: "center", color: user ? "green" : "red" }}>{message}</p>}

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//         />
//         <button
//           type="submit"
//           style={{ width: "100%", padding: "10px", background: "blue", color: "white", border: "none", borderRadius: "5px" }}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
