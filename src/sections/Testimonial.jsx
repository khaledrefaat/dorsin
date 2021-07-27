import React from "react";

import { testimonial } from "./Testimonial.module.scss";

import SectionHeader from "../components/SectionHeader";

const Testimonial = ({ sectionStyles }) => {
  return (
    <section className={(sectionStyles, testimonial)}>
      <SectionHeader
        header="WHAT THEY'VE SAID"
        description="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli."
      />
    </section>
  );
};

export default Testimonial;
