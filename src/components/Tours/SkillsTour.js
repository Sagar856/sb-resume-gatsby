import React from "react";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";
import "shepherd.js/dist/js/shepherd.min.js";
import "../../assets/styles/shepardClasses.css"

const SkillsTour = () => {
  const skillTour = new Shepherd.Tour({
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
        classes: "shepherd-cancel-icon",
      },
      classes: "shadow-md bg-purple-dark shepard-box",
      scrollTo: true,
    },
  });

  if (localStorage.getItem("seen_tour") == null) {
    skillTour.start();
    localStorage.setItem("seen_tour", "false");
  }

  skillTour.addStep({
    text: `Here is more information about my Skills set`,
    attachTo: {
      element: ".page",
      on: "top",
    },
    buttons: [
      {
        action() {
          return this.cancel();
        },
        text: "Skip tour",
        classes: "shepherd-button-cancel",
      },
      {
        action() {
          return this.next();
        },
        classes: "shepherd-button-next",
        text: "&#10095;",
      },
    ],
    id: "creating",
  });

  skillTour.addStep({
    text: `Click here to see my skills Certificates`,
    attachTo: {
      element: ".skill-certificates-link",
      on: "top",
    },
    buttons: [
      {
        action() {
          return this.cancel();
        },
        text: "Ok",
        classes: "shepherd-button-cancel",
      },
      
    ],
    id: "creating",
  });

  // skillTour.start();
};

<>
  <link rel="stylesheet" href="shepherd.js/dist/css/shepherd.css" />
  <script src="shepherd.js/dist/js/shepherd.min.js"></script>
</>;

export default SkillsTour;
