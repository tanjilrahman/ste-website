import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "./Btn";
import "./Header.scss";

const headerMenu = ["Projects", "Services", "Studio", "Blog"];

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <h1 className="logo">Sanjar Tex & Expo</h1>
        <div className={active ? `nav active` : `nav`}>
          {/* <ul>
            {headerMenu.map((elem, index) => (
              <li key={index}>
                <Link to={`/${elem}`}>{elem}</Link>
              </li>
            ))}
          </ul> */}
          <div className="btns-groups">
            {/* <Link className="btn-cart" to="/cart">
              Cart <span>0</span>
            </Link> */}
            <a href={"#contact"}>
              <PrimaryBtn text="Get in touch" />
            </a>

            {/* <div
              className={active ? `hamburger active` : `hamburger`}
              onClick={() => setActive(!active)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
