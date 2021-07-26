import React from "react";

import SectionHeader from "../components/SectionHeader";

import { team, card } from "./Team.module.scss";

const Team = ({ sectionStyles }) => {
  return (
    <section className={`${sectionStyles} ${team}`}>
      <div className="container">
        <div className="row">
          <div className="col">
            <SectionHeader
              header="BEHIND THE PEOPLE"
              description="It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout."
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className={card}>
              <img src="/images/joseph.jpg" alt="joseph" />
              <h4 className="mt-3 mb-2">joseph gonzalez</h4>
              <p>ceo</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className={card}>
              <img src="/images/ian.jpg" alt="ian" />
              <h4 className="mt-3 mb-2"> ian dooley</h4>
              <p>designer</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className={card}>
              <img src="/images/michael.jpg" alt="michael" />
              <h4 className="mt-3 mb-2">michael dam</h4>
              <p>developer</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className={card}>
              <img src="/images/matheus.jpg" alt="matheus" />
              <h4 className="mt-3 mb-2">matheus ferrero</h4>
              <p>manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
