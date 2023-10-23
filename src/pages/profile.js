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
                  My commitment to delivering clean and efficient code ensures
                  that projects are not only aesthetically pleasing but also
                  perform flawlessly. I thrive in collaborative environments and
                  am adept at communicating technical concepts to non-technical
                  stakeholders. As a problem solver, I am always eager to take
                  on new challenges and stay up-to-date with the latest industry
                  trends. My goal is to leverage my expertise to create
                  impactful web solutions that provide an exceptional user
                  experience.
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
