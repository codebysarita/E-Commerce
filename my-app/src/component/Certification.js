import React from "react";

const image = [
  "https://cdn.shopify.com/s/files/1/0505/3559/6226/files/1727949463-9c96e10a12ed02f5.png",
  "https://cdn.shopify.com/s/files/1/0505/3559/6226/files/1727949463-77cbc543ac000621.png",
  "https://cdn.shopify.com/s/files/1/0505/3559/6226/files/1727949463-539f1da8dde88833.png",
  "https://cdn.shopify.com/s/files/1/0505/3559/6226/files/1727949463-8ece989f48dc3ac2.png",
  "https://cdn.shopify.com/s/files/1/0505/3559/6226/files/1727949463-5c3e43df78433e76.png",
  "https://cdn.shopify.com/s/files/1/0505/3559/6226/files/1727949463-297882b6443540a7.png",
  "https://cdn.shopify.com/s/files/1/0505/3559/6226/files/1727949463-297882b6443540a7.png",
];

function Certification() {
  return (
    <>
      <h3 className="text-center mt-5 mb-4">OUR CERTIFICATIONS</h3>
      <div className="d-flex flex-wrap justify-content-center gap-4 px-3">
        {image.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Certification ${index + 1}`}
            width="100"
            height="100"
            className="rounded shadow-sm"
          />
        ))}
      </div>
    </>
  );
}

export default Certification;
