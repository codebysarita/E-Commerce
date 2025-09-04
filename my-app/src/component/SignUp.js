import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tags from "./Tags";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (isSignup) {
      if (!name || !email || !password) {
        setMessage("Please fill all fields");
        return;
      }
      if (users.find((u) => u.email === email)) {
        setMessage("User already exists. Please login.");
        return;
      }
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify({ name, email }));
      setMessage("Signup successful!");
    } else {
      if (!email || !password) {
        setMessage("Please fill all fields");
        return;
      }
      const user = users.find((u) => u.email === email && u.password === password);
      if (!user) {
        setMessage("Invalid email or password");
        return;
      }
      localStorage.setItem("currentUser", JSON.stringify(user));
      setMessage("Login successful!");
    }

    setFormData({ name: "", email: "", password: "" });

    setTimeout(() => navigate("/register"), 1000);
  };

  return (
    <>
      <Tags />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            width: "500px",
            minHeight: "320px",
          }}
        >
          {/* Toggle */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
            <button
              type="button"
              onClick={() => setIsSignup(true)}
              style={{
                padding: "10px 20px",
                marginRight: "10px",
                background: isSignup ? "#1c48afff" : "#ccc",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Signup
            </button>
            <button
              type="button"
              onClick={() => setIsSignup(false)}
              style={{
                padding: "10px 20px",
                background: !isSignup ? "#1c48afff" : "#ccc",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Login
            </button>
          </div>

          <h3 style={{ textAlign: "center", color: "blue" }}>{isSignup ? "Signup" : "Login"}</h3>

          {message && (
            <p
              style={{
                color: message.includes("successful") ? "green" : "red",
                textAlign: "center",
              }}
            >
              {message}
            </p>
          )}

          {isSignup && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#1c48afff",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {isSignup ? "Signup" : "Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthPage;
