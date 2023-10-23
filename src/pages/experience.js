import React from "react";
import Layout from "../components/Layout";
import { CgWorkAlt } from "@react-icons/all-files/cg/CgWorkAlt";
import { IoArrowRedoCircle } from "@react-icons/all-files/io5/IoArrowRedoCircle";
import { IoArrowUndoOutline } from "@react-icons/all-files/io5/IoArrowUndoOutline";
import { Link } from "gatsby";
import Seo from "../components/Seo";
import ExperienceTour from "../components/Tours/ExperienceTour";

const experience = () => {
  return (
    <Layout>
      <ExperienceTour />
      <Seo title="Experience" />
      <div className="right-body">
        <Link to="/" className="back-button">
          <IoArrowUndoOutline className="back-button-icons" />
          Back
        </Link>
        <div className="page">
          <h2 className="experience-page-walkthrough">
            <CgWorkAlt className="icons" />
            Experience
          </h2>
          <div className="description-section description-overflow">
            <span className="total-exp-span">
              Total experience : <b> 1.7 yrs</b>
            </span>
            <p>
              As a <b>ReactJs Developer</b> at
              <b> Cognizant Technology Solutions</b> I played a pivotal role in
              developing and enhancing web applications, leveraging my expertise
              in React and related technologies.
            </p>
            <p>My responsibilities included:</p>
            <p>
              &emsp;~Collaborating with a cross-functional team to design,
              develop, and implement user-friendly, responsive web applications
              <br />
              &emsp;~Utilizing React and JavaScript libraries to build
              interactive and dynamic front-end components
              <br />
              &emsp;~Conducting code reviews and performance optimizations to
              maintain high-quality, scalable, and maintainable codebases
            </p>
            <p>
              &emsp;My experience as a ReactJS Developer at Cognizant technology
              soluctions equipped me with the skills to develop efficient,
              user-centric applications and deep understanding of front-end
              technologies.
            </p>
            <div className="experience-my-work">
              <h3>
                Here are my ReactJS and GatsbyJS projects:
              </h3>
              <ul>
                <li>
                  <Link
                    to="https://sb-simply-recipes-grind.netlify.app"
                    className="my-work-links my-work-walkthrough"
                    target="_blank"
                  >
                    <IoArrowRedoCircle className="my-work-icons" /> Just Recipes
                    Webapp site
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://sb-youtube-plus-app.netlify.app"
                    className="my-work-links"
                    target="_blank"
                  >
                    <IoArrowRedoCircle className="my-work-icons" /> Youtube Plus
                    App
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://sb-omnifood-html-css.netlify.app"
                    className="my-work-links"
                    target="_blank"
                  >
                    <IoArrowRedoCircle className="my-work-icons" /> Omnifood
                    HTML-CSS Desktop
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://sb-web-warrior-gatsby.netlify.app"
                    className="my-work-links"
                    target="_blank"
                  >
                    <IoArrowRedoCircle className="my-work-icons" /> Web Warrior
                    Site
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default experience;
