import React from "react";

import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";

import {
  card,
  heading4,
  heading1,
  heading6,
  divider,
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
          <div className="col-md">
            <div className={card}>
              <h4 className={`${heading4} mb-2`}>ECONOMY</h4>
              <h1 className={`${heading1} mb-2`}>$9.90</h1>
              <h6 className={`${heading6}`}>BILLING PER MONTH</h6>
              <div className={`${divider} mb-4`} />
              <div className={`${plan}`}>
                <p>
                  bandwidth: <span>1GB</span>
                </p>
                <p>
                  onlinespace: <span>50MB</span>
                </p>
                <p>
                  support: <span>no</span>
                </p>
                <p>
                  domain: <span>1</span>
                </p>
                <p>
                  hidden fees: <span>No</span>
                </p>
                <Button styles="mt-4">join now</Button>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className={card}>
              <h4 className={`${heading4} mb-2`}>ECONOMY</h4>
              <h1 className={`${heading1} mb-2`}>$9.90</h1>
              <h6 className={`${heading6}`}>BILLING PER MONTH</h6>
              <div className={`${divider} mb-4`} />
              <div className={`${plan}`}>
                <p>
                  bandwidth: <span>1GB</span>
                </p>
                <p>
                  onlinespace: <span>50MB</span>
                </p>
                <p>
                  support: <span>no</span>
                </p>
                <p>
                  domain: <span>1</span>
                </p>
                <p>
                  hidden fees: <span>No</span>
                </p>
                <Button styles="mt-4">join now</Button>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className={card}>
              <h4 className={`${heading4} mb-2`}>ECONOMY</h4>
              <h1 className={`${heading1} mb-2`}>$9.90</h1>
              <h6 className={`${heading6}`}>BILLING PER MONTH</h6>
              <div className={`${divider} mb-4`} />
              <div className={`${plan}`}>
                <p>
                  bandwidth: <span>1GB</span>
                </p>
                <p>
                  onlinespace: <span>50MB</span>
                </p>
                <p>
                  support: <span>no</span>
                </p>
                <p>
                  domain: <span>1</span>
                </p>
                <p>
                  hidden fees: <span>No</span>
                </p>
                <Button styles="mt-4">join now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
