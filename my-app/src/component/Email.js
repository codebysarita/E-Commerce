import React, { useState } from "react";

function Email() {
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e) => {
    setFormData({ email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", formData.email);
    setFormData({ email: "" });
  };

  return (
    <div className="text-center my-5">
      <h3 className="mb-3">GET ON THE LIST</h3>
      <p>Be the first to know about new product launch, offers and much more!</p>

      <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center gap-2" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-secondary">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Email;
