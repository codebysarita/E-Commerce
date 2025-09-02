// import React from "react";
// import CardsSection from "./CardsSection";

// const card1Image = [
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/skarfix-plus-brightening-face-serum-1.webp?v=1752224725",
//     name: "Skarfix-plus Brightening Face Serum",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/shadow-a-gel-spf-50-sunscreen-2_940x.webp?v=1748951679",
//     name: "Shadow Gel 50 Suncream",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/shadow-spf-50-gel-kids-2_940x.webp?v=1746619314",
//     name: "Shadow SPF 50 Gel",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
//   {
//     image: "./image/shadow-brightening-sunscreen-cream-spf-50-2_940x.webp",
//     name: "Shadow Brightening Sunscreem Serum",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
// ];

// const card2Image = [
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/nigrifix-cream-50g-3_940x.webp?v=1745058491",
//     name: "Skarfix-plus Brightening Face Serum",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/skarfix-tx-cream-30g_940x.webp?v=17443518833",
//     name: "Skarfix TX cream",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/foobetik-foot-cream-2_940x.webp?v=1721287135",
//     name: "Foobetik Foot cream",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
//   {
//     image: "./image/nigrifix-underarm-lightening-roll-on-velvet-musk_940x.webp",
//     name: "Shadow Brightening SunCream SPF 50",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
// ];

// const card3Image = [
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/Shadow_50_gel_75g.webp?v=1739536607",
//     name: "Shadow 50 Gel",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/Spf_50_cream_front.webp?v=1732278864",
//     name: "Shadow 50 Cream",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/shadow-brightening-sunscreen-cream-spf-50-1.webp?v=1742535993",
//     name: "Shadow Brightening Suncream SPF 50",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/Shadow_SPF_30_Gel_Product.webp?v=1740650575",
//     name: "Shadow SPF 30 Gel",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
// ];

// const card4Image = [
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/pigment-correcting-face-serum-1.webp?v=1735540823",
//     name: "Pigment Correcting Face Serum",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/Skarfix_TX_Serum_front.webp?v=1739441381",
//     name: "Skarfix-TX De-Pigmentation & Brightening Face Serum",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/anti-pigmentation-brightening-skarfix-tx-csms-combo-1.webp?v=1741170082",
//     name: "Anti Pigmentation & Brightening Skarfix-TX CSMS Combo",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/products/Complete-skincare-kit-for-Hyperpigmentation.webp?v=1671013117",
//     name: "Complete Skincare Kit for Hyperpigmentation",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
// ];

// const card5Image = [
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/salyzap-salicylic-acid-body-wash-for-acne-100ml.webp?v=1744351481",
//     name: "Salyzap Body Wash",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/Anti_acne_Spray_11.webp?v=1729920858",
//     name: "Salyzap Spray for Body Acne",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/SalyzapazSingleProduct.webp?v=1742189688",
//     name: "Salyzap Body Wash",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
//   {
//     image:
//       "https://www.fixderma.com/cdn/shop/files/salyzap_face_wash_1.webp?v=1752725504",
//     name: "Salyzap Daily Face Cleanser",
//     reviews: "2 reviews",
//     rs: "₹499",
//   },
// ];

// function AllCard() {
//   return (
//     <div>
//       <CardsSection title="Skincare Essentials" products={card1Image} />
//       <CardsSection title="Trending Products" products={card2Image} />
//       <CardsSection title="Shadow Suncream" products={card3Image} />
//       <CardsSection title="Pigmentation" products={card4Image} />
//       <CardsSection title="Acne" products={card5Image} />
//     </div>
//   );
// }

// export default AllCard;
