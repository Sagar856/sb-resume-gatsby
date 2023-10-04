import React from "react";
import "../assets/styles/index.css";
import { CgWorkAlt } from "@react-icons/all-files/cg/CgWorkAlt";
import { IoSchoolOutline } from "@react-icons/all-files/io5/IoSchoolOutline";
import { GiGears } from "@react-icons/all-files/gi/GiGears";
import { GiBowman } from "@react-icons/all-files/gi/GiBowman";
import { FaRegHandPointLeft } from "@react-icons/all-files/fa/FaRegHandPointLeft";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import Seo from "../components/Seo";

//Hide tooltip after three seconds
if (typeof window !== "undefined") {
  let initialTimeout = setTimeout(function () {
    document.getElementById("tooltiptext-exp").style.backgroundColor = "white";
    document.getElementById("tooltiptext").style.backgroundColor = "white";
    document.getElementById("tooltiptext-skill").style.backgroundColor =
      "white";
  }, 100);

  let showTimeout = setTimeout(function () {
    document.getElementById("tooltiptext-exp").style.backgroundColor =
      "rgba(0, 0, 0, 0.429)";
    document.getElementById("tooltiptext").style.backgroundColor =
      "rgba(0, 0, 0, 0.429)";
    document.getElementById("tooltiptext-skill").style.backgroundColor =
      "rgba(0, 0, 0, 0.429)";
  }, 3000);

  let hidingTimeout = setTimeout(function () {
    document.getElementById("tooltiptext-exp").style.backgroundColor = "white";
    document.getElementById("tooltiptext").style.backgroundColor = "white";
    document.getElementById("tooltiptext-skill").style.backgroundColor =
      "white";
  }, 7000);
}

const index = () => {
  return (
    <Layout>
      <Seo title="Sagar Resume" />
      <div className="right-body">
        <Link to="/experience" className="link-style-depricate tooltip">
          {/* onClick={handleClearTimeout} */}
          <h2>
            <CgWorkAlt className="icons" />
            Experience
          </h2>
          <span id="tooltiptext-exp" className="tooltiptext-exp">
            <span className="tooltip-icons">
              <FaRegHandPointLeft />
            </span>
            Click here
          </span>
          <div className="description-section">
            <p>
              Working as a <b>ReactJs Developer</b> in
              <b> Cognizant Technology Solutions India Pvt Ltd.</b> Since
              <b> Feb-2022</b>
            </p>
            <span>
              Total experience : <b> 1.6 yrs</b>
            </span>
          </div>
        </Link>
        <Link to="/education" className="link-style-depricate tooltip">
          <div>
            <h2>
              <IoSchoolOutline className="icons" />
              Education
            </h2>
            <span id="tooltiptext" className="tooltiptext">
              <span className="tooltip-icons">
                <FaRegHandPointLeft />
              </span>
              Click on each tab for more info
            </span>
            <div className="description-section">
              <h3>Bachelor of Engineering&ensp;(2017-21)</h3>
              <h3>Mechanical Engineer</h3>
              <p>
                From <b>Savitribai Phule Pune University,</b> Passout of
                <b> Jul-2021</b> batch
              </p>
            </div>
          </div>
        </Link>
        <Link to="/skills" className="link-style-depricate tooltip">
          <div>
            <h2>
              <GiGears className="icons" />
              Skills
            </h2>
            <span id="tooltiptext-skill" className="tooltiptext-skill">
              <span className="tooltip-icons">
                <FaRegHandPointLeft />
              </span>
              Click on each tab for more info
            </span>
            <div className="description-section">
              <div className="skill-container">
                <div className="current-skill">
                  <h3>Web development skills</h3>
                  <ul>
                    <li>React JS</li>
                    <li>Gatsby JS</li>
                    <li>Java Script</li>
                    <li>CSS</li>
                    <li>HTML-5</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div className="new-skill">
                  <h3>Grabbing New Skills</h3>
                  <ul>
                    <li>Data Science</li>
                    <li>Python</li>
                    <li>Machine Learning</li>
                    <li>Data Visualization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div>
          <h2>
            <GiBowman className="icons" />
            achievements
          </h2>
          <div className="description-section">
            <p>
              Worked as NSS Volunteer for 2 years during engineering (2019-21).
            </p>
            <p style={{ marginTop: "2%" }}>
              Participated in <b>Guinness World Record</b> of tree plantation
              organized by SPPU University in 2019.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
