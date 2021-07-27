import React from "react";

import SectionHeader from "../components/SectionHeader";

import {
  work,
  boxContainer,
  box,
  boxIcon,
  leftArrow,
  rightArrow,
} from "./Work.module.scss";

const Work = ({ sectionStyles }) => {
  return (
    <section className={`${sectionStyles} ${work}`}>
      <div className="container">
        <div className="row">
          <div className="col">
            <SectionHeader
              header="WORK PROCESS"
              description="In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts."
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <div className={boxContainer}>
              <div className={box}>
                <i className="fas fa-pen-fancy" />
                <h4 className="mt-3 mb-3">tell us what you need</h4>
                <p>The Big Oxmox advised her not to do so.</p>
              </div>
              <div className={`${box} ${boxIcon}`}>
                <div className={leftArrow}>&#129122;</div>
                <div className={rightArrow}>&#129122;</div>
                <i className="far fa-address-card" />
                <h4 className="mt-3 mb-3">tell us what you need</h4>
                <p>The Big Oxmox advised her not to do so.</p>
              </div>
              <div className={box}>
                <i className="fas fa-bullseye" />
                <h4 className="mt-3 mb-3">tell us what you need</h4>
                <p>The Big Oxmox advised her not to do so.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
