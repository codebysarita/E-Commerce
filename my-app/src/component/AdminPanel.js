import React, { useState, useEffect } from "react";
import product from "./Finalcard";

function AdminPanel() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || product
  );
  const [newProduct, setNewProduct] = useState({
    id: Date.now(),
    name: "",
    rs: "",
    image: "",
    category: "",
    reviews: "0 reviews",
    url: "#",
    quntity: "1",
  });

  
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({
      id: Date.now(),
      name: "",
      rs: "",
      image: "",
      category: "",
      reviews: "0 reviews",
      url: "#",
      quntity: "1",
    });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>
      <div>
        <input
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          placeholder="Price"
          value={newProduct.rs}
          onChange={(e) => setNewProduct({ ...newProduct, rs: e.target.value })}
        />
        <input
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />
        <input
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
        />
        <button onClick={addProduct}>Add Product</button>
      </div>

      <h3>Existing Products</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.rs}{" "}
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
