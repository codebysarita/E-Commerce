import React from "react";

const shopImage = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0505/3559/6226/files/salicylic_acid.webp",
    name: "SALICYLIC ACID",
    p: "Most recommended Beta Hydroxy Acid (BHA) known for its exfoliating properties, treating acne and unclogging pores.",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0505/3559/6226/files/hyaluronic_acid.webp",
    name: "HYALURONIC ACID",
    p: "This molecule holds upto 1000 times its weight in water. The best molecule to hydrate skin.",
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0505/3559/6226/files/FCLvitamin_c_ingre.webp",
    name: "VITAMIN C",
    p: "A water-soluble vitamin that boosts collagen production and antioxidant levels. It protects the skin from UV damage",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0505/3559/6226/files/tranexamic_acid.webp",
    name: "TRANEXAMIC ACID",
    p: "A star ingredient trusted  by  experts  to  treat   hyperpigmentation,   melasma  and dark spots.",
  },
];

function Shop() {
  return (
    <div className="container">
      <div className="p-4">
        <h3 className="text-center mt-5">Shop by Ingredients</h3>

        <div className="gap-5 d-flex flex-column px-3 mt-4">
          {shopImage.map((img, index) =>
            index % 2 === 0 ? (
              <>
                <div
                  key={index}
                  className="d-flex gap-4 align-items-center  flex-wrap"
                >
                  <img
                    src={img.image}
                    alt={img.name}
                    width="150px"
                    height="150px"
                    className="rounded-circle"
                  />
                  <div className="d-flex flex-column " style={{ width: "400px" }}>
                    <h3 className="p-3">{img.name}</h3>
                    <p className="ms-3">{img.p}</p>
                    <button
                      className="btn btn-secondary "
                      style={{ width: "160px" }}
                    >
                      EXPLORE MORE
                    </button>
                  </div>
                </div>
              </>
            ) : (
                  <>
                <div
                  key={index}
                  className="d-flex gap-4 align-items-center  flex-wrap flex-row-reverse"
                >
                  <img
                    src={img.image}
                    alt={img.name}
                    width="150px"
                    height="150px"
                    className="rounded-circle"
                  />
                  <div className="d-flex flex-column align-items-end " style={{ width: "400px" }}>
                    <h3 className="p-3">{img.name}</h3>
                    <p className="ms-3">{img.p}</p>
                    <button
                      className="btn btn-secondary "
                      style={{ width: "160px" }}
                    >
                      EXPLORE MORE
                    </button>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
