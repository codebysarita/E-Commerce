import React from "react";

function AdminDashboard() {
 
  const totalProducts = 20;
  const totalOrders = 5;
  const totalUsers = 3;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ border: "1px solid #ccc", padding: "20px", flex: 1 }}>
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
        </div>
        <div style={{ border: "1px solid #ccc", padding: "20px", flex: 1 }}>
          <h3>Total Orders</h3>
          <p>{totalOrders}</p>
        </div>
        <div style={{ border: "1px solid #ccc", padding: "20px", flex: 1 }}>
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
