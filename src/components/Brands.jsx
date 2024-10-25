import React from "react";
import { SecondaryBtn } from "./Btn";
import "./Brands.scss";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.webp";

const data = [
  {
    text: "fashion",
    tag: "branding",
    img: image2,
  },
  {
    text: "Noise",
    tag: "branding",
    img: image3,
  },
  {
    text: "Lawyers",
    tag: "identity",
    img: image1,
  },
  // {
  //   text: "flowers",
  //   tag: "identity",
  //   img: image2,
  // },
];

const Brands = () => {
  return (
    <div className="brands">
      <div className="main-text">
        <h2>Selected brands</h2>
        <SecondaryBtn text={"see all"} classText="btn-s-45" />
      </div>
      <div className="container">
        {data.map((elem, index) => (
          <div
            className="item"
            key={index}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.714)),url(${elem.img})`,
            }}
          >
            <div className="lower-text">
              <h1>{elem.text}</h1>
              <div className="lower-text-btns">
                <SecondaryBtn text="Discover project" classText={"btn-s-45"} />
                <span className="brandTag">{elem.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
