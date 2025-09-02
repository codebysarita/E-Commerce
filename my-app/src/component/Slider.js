import React from "react";
 function Slider() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>

      <div className="carousel-inner mt-5">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://www.fixderma.com/cdn/shop/files/Tomaglow-desk..webp?v=1753857675&width=1880"
            className="d-block w-100"
            alt="Tomaglow"
          />
         
        </div>

        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://www.fixderma.com/cdn/shop/files/Skarfix_banner_dekstop.webp?v=1748510587&width=1880"
            className="d-block w-100"
            alt="Skarfix"
          />
         
        </div>

        <div className="carousel-item">
          <img
            src="	https://www.fixderma.com/cdn/shop/files/favourite_celebrate_desktop.webp?v=1751460650&width=1880"
            className="d-block w-100"
            alt="Third slide"
          />
         
        </div>

        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="	https://www.fixderma.com/cdn/shop/files/sunscreen_banner_desktop.webp?v=1748510665&width=1880"
            className="d-block w-100"
            alt="Skarfix Again"
          />
        
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;