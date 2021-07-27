import React from "react";

import SectionHeader from "../components/SectionHeader";
import BgLayout from "../components/BgLayout";

import { getStarted } from "./GetStarted.module.scss";

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
            <SectionHeader
              header="Let's Get Started"
              description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
