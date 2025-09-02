import React from "react";

function Contact() {
  return (
    <div className="container my-5 bg-light">
      <div className="row">
        <div className="col-md-3 mb-4">
          <div style={{ width: "10rem" }}>
            <img
              src="https://www.fixderma.com/cdn/shop/files/fixderma_logo_down_420x.svg?v=1750145899"
              alt="Fixderma Logo"
              className="img-fluid mb-3"
            />
          </div>
          <div className="image">
           <i class="fa-brands fa-facebook"></i>
          </div>
          <div>
            <h5>Download App</h5>
            <img
              src="https://cdn.shopify.com/s/files/1/0505/3559/6226/files/ios-android.webp"
              alt="App Icons"
              style={{ width: "6rem" }}
              className="img-fluid"
            />
          </div>
        </div>

        <div className="col-md-2 mt-3">
          <h3>Categories</h3>
          <div className="d-flex flex-column gap-2 mt-3">
            <a href="#">Sunscreen</a>
            <a href="#">Hand Cream</a>
            <a href="#">Body Lotion</a>
            <a href="#">Face Care</a>
            <a href="#">Body Care</a>
            <a href="#">Acne Care</a>
            <a href="#">Foot Care</a>
            <a href="#">Lip Balm</a>
            <a href="#">Combo Kits</a>
            <a href="#">New Launches</a>
          </div>
        </div>
        <div className="col-md-2 mt-3">
          <h3>QUICK LINKS</h3>
          <div className="d-flex flex-column gap-2 mt-3">
            <a href="#">Blog</a>
            <a href="#">About Us</a>
            <a href="#">Our Story</a>
            <a href="#">Global Presence</a>
            <a href="#">Contact Us</a>
            <a href="#">Awards & Certifications</a>
            <a href="#">Media Press</a>
            <a href="#">Video Gallery</a>
            <a href="#">Join Our Club</a>
          </div>
        </div>
        <div className="col-md-2 mt-3">
          <h3>Policy & Services</h3>
          <div className="d-flex flex-column gap-2 mt-3">
            <a href="#">Returns, Refunds,</a>
            <a href="#"> Cancellations and</a>
            <a href="#">Exchanges</a>
            <a href="#">Shipping policy</a>
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
            <a href="#">Offers</a>
          </div>
        </div>

        <div className="col-md-3 mt-3">
          <h3>Location</h3>
          <span>
            101-104, 1st Floor, Vipul Plaza, Suncity , Golf Course Rd, Sec- 54,
            Gurugram-122011, India
          </span>
          <h3>Contact Us</h3>
          <span>+91 9999979839</span>
          <h3>Email</h3>
          <span>support@fixderma.com</span>
        </div>
      </div>
      <div
        className="div mt-5"
        style={{ border: "2px solid black", width: "100%" }}
      ></div>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            © 2025 Fixderma India Pvt. ltd. All Rights Reserved.
          </div>
          <div class="col">100% Payment Protection, Easy Return Policy</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
