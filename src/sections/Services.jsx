import React from "react";

import SectionHeader from "../components/SectionHeader";
import ServicesBox from "../components/ServicesBox";

const Services = ({ sectionStyles }) => {
  return (
    <section id="services" className={`${sectionStyles} container-md`}>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <SectionHeader
            header="Our Services"
            description="We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that have meaning and add a value
            for our clients."
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md mt-3">
          <ServicesBox
            icon="far fa-gem"
            title="Digital Design"
            description="Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform."
          />
        </div>
        <div className="col-md mt-3">
          <ServicesBox
            icon="fas fa-fill"
            title="Unlimited Colors"
            description="Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet."
          />
        </div>
        <div className="col-md mt-3">
          <ServicesBox
            icon="fas fa-piggy-bank"
            title="Strategy Solutions"
            description="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia."
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md mt-3">
          <ServicesBox
            icon="fas fa-atom"
            title="Awesome Support"
            description="It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World."
          />
        </div>
        <div className="col-md mt-3">
          <ServicesBox
            icon="fas fa-scroll"
            title="Truly Multipurpose"
            description="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
          />
        </div>
        <div className="col-md mt-3">
          <ServicesBox
            icon="fas fa-plane"
            title="Easy to customize"
            description="Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
