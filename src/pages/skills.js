import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { GiGears } from "@react-icons/all-files/gi/GiGears";
import { IoArrowUndoOutline } from "@react-icons/all-files/io5/IoArrowUndoOutline";
import { IoLogoReact } from "@react-icons/all-files/io5/IoLogoReact";
import { IoLogoJavascript } from "@react-icons/all-files/io5/IoLogoJavascript";
import { GrGatsbyjs } from "@react-icons/all-files/gr/GrGatsbyjs";
import { ImHtmlFive2 } from "@react-icons/all-files/im/ImHtmlFive2";
import { ImCss3 } from "@react-icons/all-files/im/ImCss3";
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap";
import Seo from "../components/Seo";

const skills = () => {
  return (
    <Layout>
        <Seo title="Skills" />
      <div className="right-body">
        <Link to="/" className="back-button">
          <IoArrowUndoOutline className="back-button-icons" />
          Back
        </Link>
        <div className="page">
          <h2>
            <GiGears className="icons" />
            Skills
          </h2>
          <div className="description-section">
            <p>
              My primary <b>Web development</b> skills are below:
            </p>
            <ul className="skill-page-ul">
              <li>
                <b>
                  <IoLogoReact className="skill-page-icons" />
                  React JS
                </b>
              </li>
              <li>
                <b>
                  <GrGatsbyjs className="skill-page-icons" />
                  Gatsby JS
                </b>
              </li>
              <li>
                <b>
                  <IoLogoJavascript className="skill-page-icons" />
                  Java Script
                </b>
              </li>
              <li>
                <b>
                  <ImCss3 className="skill-page-icons" />
                  CSS
                </b>
              </li>
              <li>
                <b>
                  <ImHtmlFive2 className="skill-page-icons" />
                  HTML-5
                </b>
              </li>
              <li>
                <b>
                  <SiBootstrap className="skill-page-icons" />
                  Bootstrap
                </b>
              </li>
            </ul>
            <p>
              Being a engineer I'am always been a curious to new technologies
              and smart things, So as a emerging technology and future of Data
              which has no end I'am learning this new field <b>Data Science</b>
              &nbsp; and these are some of its sub-fields:
            </p>
            <ul className="skill-page-ul">
              <li>Data Science</li>
              <li>Python</li>
              <li>Machine Learning</li>
              <li>Data Visualization</li>
            </ul>
            <Link to="/skills/certificates" className="skill-certificates-link link-style-depricate">
              <text>
                Click Here to see all my <b>Skills Certificates</b>
              </text>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default skills;
