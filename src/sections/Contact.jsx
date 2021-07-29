import React from "react";

import SectionHeader from "../components/SectionHeader";

import {
  contact,
  contact__infoTitle,
  contact__infoMuted,
} from "./Contact.module.scss";

const Contact = ({ sectionStyles }) => {
  return (
    <section className={`${sectionStyles} ${contact}`}>
      <div className="container">
        <div className="row">
          <div className="col">
            <SectionHeader
              header="GET IN TOUCH"
              description="We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results."
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-12">
            <div className="contact__info">
              <p className="d-flex flex-column mb-5">
                <span className={contact__infoTitle}>Office Address 1:</span>
                <span className={contact__infoMuted}>
                  4461 Cedar Street Moro, AR 72368
                </span>
              </p>
              <p className="d-flex flex-column mb-5">
                <span className={contact__infoTitle}>Office Address 2:</span>
                <span className={contact__infoMuted}>
                  2467 Swick Hill Street
                </span>
                <span className={contact__infoMuted}>
                  New Orleans, LA 70171
                </span>
              </p>
              <p className="d-flex flex-column">
                <span className={contact__infoTitle}>Working Hours:</span>
                <span className={contact__infoMuted}>9:00AM To 6:00PM</span>
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <form action="#">
              <div className="row mb-4 ">
                <div className="col">
                  <input type="text" placeholder="Your Name*" />
                </div>
                <div className="col">
                  <input type="email" placeholder="Your Email*" />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <input type="text" placeholder="Your Subject.." />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <textarea
                    cols="30"
                    rows="4"
                    placeholder="Your Message.."
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
