import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Tags from "./component/Tags";
import Slider from "./component/Slider";
import ShopConcern from "./component/ShopConcern";
import Image from "./component/Image";
import "./App.css";
import Shop from "./component/Shop";
import Banner from "./component/Banner";
import Certification from "./component/Certification";
import Blog from "./component/Blog";
import Knowing from "./component/Knowing";
import Email from "./component/Email";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Addcart from "./component/Addcart";
import Finalcard from "./component/Finalcard";
import Lastcard from "./component/Lastcard";
import Details from "./component/Details";
import AllCardsData from "./component/AllCardsData";
import Addquantity from "./component/Addquantity";
// import Img from "./component/Img";
import ShowCart from "./component/ShowCart";
import AllCard from "./component/allcard";
import CardsSection from "./component/CardsSection";
import ViewCart from "./component/ViewCart";
import Items from "./component/Items";
// import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Order from "./component/Order";
import Face from "./component/Face";
import Body from "./component/Body";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/concern" element={<ShopConcern />} />
        <Route path="/image" element={<Image />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/knowing" element={<Knowing />} />
        <Route path="/email" element={<Email />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/face" element={<Face />} />
        <Route
          path="/cart"
          element={
            <Cart
              name={
                localStorage.getItem("currentUser")
                  ? JSON.parse(localStorage.getItem("currentUser")).name
                  : ""
              }
            />
          }
        />
        <Route path="/addcart" element={<Addcart />} />
        <Route path="/finalcard" element={<Finalcard />} />
        <Route path="/lastcard" element={<Lastcard />} />
        <Route path="/details" element={<Details />} />
        {/* <Route path="/allcardsdata" element={<AllCardsData />} /> */}
        <Route path="/addquantity" element={<Addquantity />} />
        <Route path="/showcart" element={<ShowCart />} />
        <Route path="/allcard" element={<AllCard />} />
        <Route path="/cardssection" element={<CardsSection />} />
        <Route path="/viewcart" element={<ViewCart />} />
        <Route path="/items" element={<Items />} />
        {/* <Route path="/login" element={<Login/>}></Route> */}
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/body" element={<Body/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
