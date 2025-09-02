import React from "react";

const showImage = [
  {
    image:
      "https://www.fixderma.com/cdn/shop/files/Sunscreen_tanned_245x.webp?v=1721390995",
    name: "Suncream",
    url: "#",
  },
  {
    image:
      "https://www.fixderma.com/cdn/shop/files/Mosture_concern_245x.webp?v=1737450468",
    name: "Moisturizer",
    url: "#",
  },
  {
    image:
      "https://www.fixderma.com/cdn/shop/files/pigmentation31_245x.webp?v=1721459591",
    name: "Pigmentation",
    url: "#",
  },
  {
    image:
      "https://www.fixderma.com/cdn/shop/files/foot11_245x.webp?v=1721459495",
    name: "Footcare",
    url: "#",
  },
];

function ShowConcern() {
  return (
    <div>
      <h3 className="text-center mt-5">SHOW BY CONCERN</h3>
      <div className="d-flex flex-wrap justify-content-evenly gap-4 px-3 mt-4">
        {showImage.map((img, index) => (
          <div key={index} className="text-center">
            <img
              src={img.image}
              alt={img.name}
              width="150px"
              height="150px"
              className="rounded-circle shadow-sm"
            />
            <a href={img.url} className="text-decoration-none text-dark">
              <p className="mt-2">{img.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowConcern;
