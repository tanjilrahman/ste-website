import React, { useRef } from "react";
import CircleIcon from "./CircleIcon";
import "./Contact.scss";
import Marquee from "react-fast-marquee";
import { AiOutlineInstagram, AiOutlineBehance } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { SecondaryBtn } from "./Btn";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

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
  const form = useRef();
  const phone = useRef();
  const name = useRef();
  const email = useRef();
  const subject = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.status === 200) {
            name.current.value = "";
            phone.current.value = "";
            email.current.value = "";
            subject.current.value = "";
            message.current.value = "";
            console.log("email sent successfully!");
            toast.success("Thank you! we'll reach out to you soon!", {
              position: "top-center",
              autoClose: 4000,
              progress: undefined,
            });
          }
        },
        (error) => {
          if (error) {
            console.error("Error:", error);
            toast.error("Something went wrong! Please try again later.", {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: true,
              progress: undefined,
            });
          }
        }
      );
  };
  return (
    <div className="Contact">
      <div className="container-1" id="contact">
        <span>Contact</span>
        {/* <div className="text">
          <h1>Let's make your fashion brand shine</h1>
        </div> */}

        <div className="form">
          <form ref={form} onSubmit={sendEmail} name="contact">
            <div>
              <label id="name">Name</label>
              <input type="text" name="name" ref={name} required />
            </div>
            <div>
              <label id="email">Email</label>
              <input type="email" name="email" ref={email} required />
            </div>
            <div>
              <label id="phone">Phone</label>
              <input type="tel" name="phone" ref={phone} required />
            </div>
            <div>
              <label id="subject">Subject</label>
              <input type="text" name="subject" ref={subject} required />
            </div>
            <div>
              <label id="message">Message</label>
              <textarea name="message" ref={message} required></textarea>
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
