import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Tags() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const cartCount = parseInt(localStorage.getItem("cartCount")) || 0;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/", { replace: true });
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar-expand-lg bg-white border-bottom px-4 py-2">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center px-3 py-2">
            <a className="d-flex align-items-center text-decoration-none" href="/">
              <img
                src="/image/logo.svg"
                alt="Logo"
                style={{ height: "40px", marginRight: "10px" }}
              />
            </a>

            <form className="d-flex align-items-center gap-3">
              <input
                className="form-control rounded-pill text-center"
                type="search"
                placeholder=" Search Here"
              />

              {!currentUser ? (
                <Link to={`/signup`}>
                  <button className="btn btn-info">Login / Signup</button>
                </Link>
              ) : (
                <>
                  <button className="btn btn-outline-primary">{currentUser.name}</button>
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              )}

              <div className="position-relative">
                <Link to={`/cart`}>
                  <button className="btn btn-outline-secondary">🛒</button>
                </Link>
                <div
                  className="position-absolute top-0 start-100 translate-middle bg-info-subtle text-center m-1"
                  style={{ borderRadius: "12rem", width: "20px" }}
                >
                  {cartCount}
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar / Menu Items */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary ms-5">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/face")}>
                  Face
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/body")}>
                  Body
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate("/hair")}>
                  Hair
                </a>
              </li>

              {/* Dropdown Example */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sunscreen
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Sunscreen Gel
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sunscreen Lotion
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sunscreen Cream
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sunscreen For Kids
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sunscreen Spray
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  New Launches
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Offers
                </a>
              </li>

              {/* Category Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  CATEGORY
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Sunscreen Cream</a></li>
                  <li><a className="dropdown-item" href="#">Face Serum</a></li>
                  <li><a className="dropdown-item" href="#">Face Wash</a></li>
                  <li><a className="dropdown-item" href="#">Hand Cream</a></li>
                  <li><a className="dropdown-item" href="#">Baby Care</a></li>
                  <li><a className="dropdown-item" href="#">Acne Care</a></li>
                </ul>
              </li>

              {/* Concern Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  CONCERN
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Anti Ageing</a></li>
                  <li><a className="dropdown-item" href="#">Hair Problem</a></li>
                  <li><a className="dropdown-item" href="#">Dry Skin</a></li>
                  <li><a className="dropdown-item" href="#">Oily Skin</a></li>
                  <li><a className="dropdown-item" href="#">Acne</a></li>
                  <li><a className="dropdown-item" href="#">Moms and Baby Care</a></li>
                </ul>
              </li>

              {/* Ingredients Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Ingredients
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Anti Ageing</a></li>
                  <li><a className="dropdown-item" href="#">Hair Problem</a></li>
                  <li><a className="dropdown-item" href="#">Dry Skin</a></li>
                  <li><a className="dropdown-item" href="#">Oily Skin</a></li>
                  <li><a className="dropdown-item" href="#">Acne</a></li>
                  <li><a className="dropdown-item" href="#">Moms and Baby Care</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  RX Range
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Tags;
