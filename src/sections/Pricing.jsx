import React from "react";

import SectionHeader from "../components/SectionHeader";

import {
  card,
  heading4,
  heading1,
  heading6,
  plan,
} from "./Pricing.module.scss";

const Pricing = ({ sectionStyles }) => {
  return (
    <section className={sectionStyles}>
      <SectionHeader
        header="OUR PRICING"
        description="Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options."
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="heading4">ECONOMY</div>
              <div className="heading1">$9.90</div>
              <h6 className="heading6">BILLING PER MONTH</h6>
              <div className="plan">
                <p>
                  bandwidth:<span>1gb</span>
                </p>
                <p>
                  onlinespace:<span>50mb</span>
                </p>
                <p>
                  support:<span>no</span>
                </p>
                <p>
                  domain:<span>1</span>
                </p>
                <p>
                  hidden fees:<span>No</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="heading4">ECONOMY</div>
              <div className="heading1">$9.90</div>
              <h6 className="heading6">BILLING PER MONTH</h6>
              <div className="plan">
                <p>
                  bandwidth:<span>1gb</span>
                </p>
                <p>
                  onlinespace:<span>50mb</span>
                </p>
                <p>
                  support:<span>no</span>
                </p>
                <p>
                  domain:<span>1</span>
                </p>
                <p>
                  hidden fees:<span>No</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="heading4">ECONOMY</div>
              <div className="heading1">$9.90</div>
              <h6 className="heading6">BILLING PER MONTH</h6>
              <div className="plan">
                <p>
                  bandwidth:<span>1gb</span>
                </p>
                <p>
                  onlinespace:<span>50mb</span>
                </p>
                <p>
                  support:<span>no</span>
                </p>
                <p>
                  domain:<span>1</span>
                </p>
                <p>
                  hidden fees:<span>No</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
