import React from "react";
import { FiPhone } from "@react-icons/all-files/fi/FiPhone";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { ImLocation } from "@react-icons/all-files/im/ImLocation";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FaRegHandPointDown } from "@react-icons/all-files/fa/FaRegHandPointDown";

// //Hide tooltip after three seconds
// if (typeof window !== "undefined") {
//   setTimeout(function () {
//     document.getElementById("tooltiptext-profile").style.backgroundColor =
//       "#6e9b9b";
//   }, 100);
//   setTimeout(function () {
//     document.getElementById("tooltiptext-profile").style.backgroundColor =
//       "rgba(0, 0, 0, 0.429)";
//   }, 3000);
//   setTimeout(function () {
//     document.getElementById("tooltiptext-profile").style.backgroundColor =
//       "#6e9b9b";
//   }, 7000);
// }

const Layout = ({ children }) => {
  return (
    <div>
      <div className="container">
        <section className="left-side">
          <div className="left-header">
            <Link to="/gallery" className="link-style-depricate photo-walkthrough">
              <StaticImage
                src="../assets/images/IMG_5239-01.jpeg"
                alt="home page img"
                className="profile-img"
                placeholder="BLURRED"
                layout="fullWidth"
              />
            </Link>
            <div className="left-body">
              <div className="tooltip">
                {/* <span id="tooltiptext-profile" className="tooltiptext-profile">
                  <span className="tooltip-icons">
                    <FaRegHandPointDown />
                  </span>
                  Click
                </span> */}
              </div>
              <Link to="/profile" className="link-style-depricate">
                <h3 className="profile-heading">Profile</h3>
                <p>
                  Having an experience in <b>Cognizant technology solutions</b>{" "}
                  as
                  <b> ReactJS</b> Developer since Feb-2022. <br />
                  Looking forward to explore new opportunities and experience
                  different work cultures
                </p>
              </Link>
              <div className="contact-me-section">
                <h3>Contact me</h3>
                <ul>
                  <li>
                    <FiPhone className="contact-me-icons" />
                    +919403067286
                  </li>
                  <li>
                    <a
                      className="contact-email"
                      href="mailto:sagarbodkhe856@gmail.com"
                    >
                      <AiOutlineMail className="contact-me-icons" />
                      sagarbodkhe856@gmail.com
                      {/* <br/>&emsp;&emsp; */}
                    </a>
                  </li>
                  <li>
                    <ImLocation className="contact-me-icons" />
                    Pune
                  </li>
                  <li>
                    <Link
                      className="contact-email"
                      target="_blank"
                      to="https://www.linkedin.com/in/sagar-bodkhe-sb856"
                    >
                      <AiFillLinkedin className="contact-me-icons" />
                      Visit linkedin Profile
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="right-side">
          <div className="right-header">
            <small>Name:</small>
            <Link to="/" className="link-style-depricate">
              <h1>Sagar Bodkhe</h1>
            </Link>
            <text>Web Developer</text>
          </div>
          {/* Rendering children here */}
          {children}
        </section>
      </div>
    </div>
  );
};

export default Layout;
