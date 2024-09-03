import React from "react";
import "./Hero.scss";
import { SecondaryBtn } from "./Btn";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="text">
          <h1>
            Sanjar Tex <br />& Expo
          </h1>
          <div className="text-desc">
            <p>
              100% export-oriented well reputed ready-made garments exporter &
              supplier in Bangladesh since 2021.
            </p>
            <SecondaryBtn text={"Learn more"} classText="btn-s-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
