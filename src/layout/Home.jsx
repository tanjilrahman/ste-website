import React from "react";
import CircleIcon from "../components/CircleIcon";
import CompanyLogos from "../components/CompanyLogos";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import About from "../components/About";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <CompanyLogos />
      <About />
      <Brands />
      <Contact />
      <ToastContainer />
    </div>
  );
};

export default Home;
