import React from "react";
import { features, imageContainer, list, item } from "./Features.module.scss";

import Description from "../components/Description";
import Button from "../components/Button";

const Features = ({ sectionStyles }) => {
  return (
    <div className={`${features} ${sectionStyles}`}>
      <div className="container-md">
        <div className="row">
          <div className="col">
            <h3 className="heading mb-5">
              A digital web design studio creating modern & engaging online
              experiences
            </h3>
            <Description>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </Description>
            <ul className={`mt-5 mb-5 ${list}`}>
              <li className={item}>We put a lot of effort in design.</li>
              <li className={item}>
                The most important ingredient of successful website.
              </li>
              <li className={item}>
                Sed ut perspiciatis unde omnis iste natus error sit.
              </li>
              <li className={item}>Submit Your Orgnization.</li>
            </ul>
            <Button>
              Learn More <i class="fas fa-arrow-right"></i>
            </Button>
          </div>
          <div className="col">
            <div className={imageContainer}>
              <img src="/images/online-world.svg" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
