import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import Tags from "./Tags";

const Signup = () => {
    const navigate = useNavigate();
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

    if (!name || !email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    //   if (users.find(u => u.email === email)) {
    //     setMessage("User already exists");
    //     return;
    //   }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("currentUser", JSON.stringify({ name, email }));

    setMessage("Signup successful!");

    setFormData({ name: "", email: "", password: "" });

    //   localStorage.setItem("currentUser", JSON.stringify({ name, email }));
  };
  

  return (
    <>
      <Tags />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            width: "500px",
            height: "300px",
          }}
        >
          <h3 style={{ textAlign: "center", color: "blue" }}>Signup</h3>

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

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
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
            Signup
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
