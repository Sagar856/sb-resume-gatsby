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
          <h2>
            <CgWorkAlt className="icons" />
            Experience
          </h2>
          <div className="description-section">
            <p>
              Working as a <b>ReactJs Developer</b> in
              <b> Cognizant Technology Solutions India Pvt Ltd.</b> Since
              <b> Feb-2022</b>
            </p>
            <span>
              Total experience : <b> 1.6 yrs</b>
            </span>
            <p>
              &emsp;Initially joined Cognizant as a fresher and completed
              cognizant mandatory training in Core-Java and Full-Stack
              engineering for 5 months, then Completed ReactJs training as per
              the business requirement and currently working as a ReactJS
              developer.
            </p>
            <p>
              &emsp;Here I worked on many different technologies, Initially
              Worked on Core-Java, MySQL in training. Then as in Project as per
              project requirement grabbed ReactJs, HTML-5, CSS, Java Script,
              GatsbyJs. And also worked on different case study projects.
            </p>
            <div className="experience-my-work">
              <h3>
                Here are some of my piece of work in ReactJS and GatsbyJS:
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
                    <IoArrowRedoCircle className="my-work-icons" /> Youtube Plus App
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://sb-omnifood-html-css.netlify.app"
                    className="my-work-links"
                    target="_blank"
                  >
                    <IoArrowRedoCircle className="my-work-icons" /> Omnifood HTML-CSS Desktop
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://sb-web-warrior-gatsby.netlify.app"
                    className="my-work-links"
                    target="_blank"
                  >
                    <IoArrowRedoCircle className="my-work-icons" /> Web Warrior Site
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
