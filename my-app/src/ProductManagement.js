import React, { useState, useEffect } from "react";

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

 
  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price) {
      alert("Please enter product name and price");
      return;
    }
    const updatedProducts = [
      ...products,
      { id: Date.now(), ...newProduct },
    ];
    setProducts(updatedProducts);
    setNewProduct({ name: "", price: "", image: "" });
  };

 
  const handleDelete = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Management</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAdd}>Add Product</button>
      </div>


      <h3>All Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            <img
              src={product.image}
              alt={product.name}
              width="50"
              style={{ marginRight: "10px" }}
            />
            {product.name} - ₹{product.price}
            <button
              onClick={() => handleDelete(product.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductManagement;
