import React from "react";

function ImageCard() {
  return (
    <div className="container-fluid mt-4 ">
      <div className="card mb-3 bg-info" >
        <div className="row g-0">
          
          <div className="col-md-8">
            <div className="card-body">
              
              <p className="card-text text-center mt-5">
               <h1>REAL PEOPLE,<br/>REAL RESULTS</h1>
              </p>
             
            </div>
          </div>
          {/* <div className="col-md-4">
            <img
              src="https://via.placeholder.com/150"
              className="img-fluid rounded-start"
              alt="Product"
            />
          </div> */}


      <div className="card product-card mx-auto" style={{ width: "18rem" }}>
        <div className="image-container">
          <img
            src="	https://cdn.shopify.com/s/files/1/0505/3559/6226/files/Before-After-under-eye-cream.webp"
            className="card-img-top default-img"
            alt="Default"
          />
          
           
        </div>
       
      </div>
   
 



        </div>
      </div>
    </div>
  );
}

export default ImageCard;
