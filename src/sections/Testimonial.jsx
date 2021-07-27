import React from "react";

import { box } from "./Testimonial.module.scss";

import SectionHeader from "../components/SectionHeader";

const Testimonial = ({ sectionStyles }) => {
  return (
    <section className={sectionStyles}>
      <div className="container">
        <div className="row">
          <div className="col">
            <SectionHeader
              header="WHAT THEY'VE SAID"
              description="The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli."
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-12">
            <div className={box}>
              <img src="/images/ben-parker.jpg" alt="ben parker" />
              <p>
                "I feel confident imposing change on myself. It's a lot more fun
                progressing than looking back. That's why I need to throw curve
                balls."
              </p>
              <h5>
                BEN PARKER - <span>Charleston</span>
              </h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className={box}>
              <img src="/images/brooke-cagle.jpg" alt="brooke cagle" />
              <p>
                "Our task must be to free ourselves by widening our circle of
                compassion to embrace all living creatures and the whole of
                nature and its beauty."
              </p>
              <h5>
                {" "}
                BROOKE CAGLE - <span>Worcester</span>
              </h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className={box}>
              <img src="/images/vicky-hladynets.jpg" alt="vicky hladynets" />
              <p>
                "I've learned that people will forget what you said, people will
                forget what you did, but people will never forget how you made
                them feel."
              </p>
              <h5>
                VICKY HLADYNETS - <span>Lynchburg</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
