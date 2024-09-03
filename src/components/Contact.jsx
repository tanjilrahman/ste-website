import React from "react";
import CircleIcon from "./CircleIcon";
import "./Contact.scss";
import Marquee from "react-fast-marquee";
import { AiOutlineInstagram, AiOutlineBehance } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { SecondaryBtn } from "./Btn";

const socialData = [
  {
    icon: function () {
      return <AiOutlineInstagram />;
    },
    text: "instagram",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: function () {
      return <CiTwitter />;
    },
    text: "Twitter",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: function () {
      return <FiFacebook />;
    },
    text: "Facebook",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: function () {
      return <AiOutlineBehance />;
    },
    text: "Behance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

const Contact = () => {
  return (
    <div className="Contact">
      <div className="container-1">
        <span>Contact</span>
        {/* <div className="text">
          <h1>Let's make your fashion brand shine</h1>
        </div> */}
        <form name="contact" method="POST" netlify>
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Role:{" "}
              <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

        <div className="form">
          <form name="Sanjar Tex & Expo contact form" method="POST" netlify>
            <input
              type="hidden"
              name="form-name"
              value="Sanjar Tex & Expo contact form"
            />
            <div>
              <label id="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label id="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label id="phome">Phone</label>
              <input type="number" name="phome" />
            </div>
            <div>
              <label id="subject">Subject</label>
              <input type="text" name="subject" />
            </div>
            <div>
              <label id="message">Message</label>
              <textarea type="text" name="message" />
            </div>
            <button type="submit" className="btn-s">
              Submit
              <CircleIcon />
            </button>
          </form>
        </div>
      </div>

      <div className="container-2">
        <Marquee pauseOnHover gradient={false}>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
          <span>Follow us on social media</span>
        </Marquee>
      </div>

      <div className="container-3">
        {socialData.map((elem, index) => (
          <div className="item" key={index}>
            <div className="upper">
              {elem.icon()}
              <SecondaryBtn classText={"btn-s-45"} text={""} />
            </div>
            <div className="lower">
              <h3>{elem.text}</h3>
              <p>{elem.desc.split(0, 180)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
