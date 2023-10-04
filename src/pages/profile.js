import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { IoArrowUndoOutline } from "@react-icons/all-files/io5/IoArrowUndoOutline";
import { FcBusinessman } from "@react-icons/all-files/fc/FcBusinessman";
import Seo from "../components/Seo";

const profile = () => {
  return (
    <Layout>
      <Seo title="My Profile" />
      <div className="right-body">
        <Link to="/" className="back-button">
          <IoArrowUndoOutline className="back-button-icons" />
          Back
        </Link>
        <div className="page">
          <h2>
            <FcBusinessman className="icons" />
            Profile
          </h2>
          <div className="description-section">
            <section>
              <p>
                Full Name:&emsp;<b>Sagar Nanasaheb Bodkhe</b>
              </p>
              <p>
                Date of Birth:&emsp;<b>2nd Jan 2000</b>
              </p>
              <p>
                Age:&emsp;<b>24 years</b>
              </p>
              <p>
                Sex:&emsp;
                <b>Male</b>
              </p>
            </section>
            <section>
              <h3>Description:</h3>
              <div className="profile-description">
              <p>
                  Having experience in <b>Cognizant technology solutions</b> as
                  <b> ReactJS</b> Developer since Feb-2022.
                  Looking forward to explore new opportunities and experience
                  different work cultures
                </p>
                <p>
                  Results-driven mechanical engineering student from Pune
                  university, passionate about learning new technologies and
                  upgrade skills to excellence. Excellent problem-solving and
                  technical skills and ability to perform great in team. Seeking
                  to work on the latest trends in the sector.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default profile;
