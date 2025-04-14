import React from "react";
import Navbar from "../components/Navbar";
import Production from "../components/Production";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Offer from "../components/Offer";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <Production />
      <About />
      <Services />
      <Offer />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
