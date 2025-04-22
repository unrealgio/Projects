import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Challenge from "../components/Challenge";
import About from "../components/About";
import PageTransition from "../components/PageTransition";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Solution from "../components/Solution";

function HomePage() {
  return (
    <PageTransition>
      <Navbar />
      <Home />
      <About />
      <Challenge />
      <Solution />
      <Services />
      <Testimonials />
      <Footer />
    </PageTransition>
  );
}

export default HomePage;