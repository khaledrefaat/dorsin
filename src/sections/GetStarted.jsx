import React from "react";

import HeadingDescription from "../components/HeadingDescription";
import BgLayout from "../components/BgLayout";

import { getStarted } from "./GetStarted.module.scss";
import Button from "../components/Button";

const GetStarted = ({ sectionStyles }) => {
  return (
    <section
      className={`${sectionStyles} ${getStarted}`}
      style={{ backgroundImage: 'url("/images/working.jpg")' }}
    >
      <BgLayout />
      <div className="container">
        <div className="row">
          <div className="col">
            <HeadingDescription
              headingContent="Let's Get Started"
              description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
              Button={() => <Button iswhite>Get Started &#129122;</Button>}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
