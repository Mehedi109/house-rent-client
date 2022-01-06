import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Banner from "./Banner/Banner";
import Houses from "./Houses/Houses";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Houses />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
