import React from "react";

import Header from "./sections/Header";
import Services from "./sections/Services";
import Features from "./sections/Features";
import WebDesc from "./sections/WebDesc";
import Pricing from "./sections/Pricing";
import Team from "./sections/Team";
import Work from "./sections/Work";
import Testimonial from "./sections/Testimonial";
import GetStarted from "./sections/GetStarted";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

import classes from "./App.module.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Services sectionStyles={classes.section} />
      <Features sectionStyles={classes.section} />
      <WebDesc />
      <Pricing sectionStyles={classes.section} />
      <Team sectionStyles={classes.section} />
      <Work sectionStyles={classes.section} />
      <Testimonial sectionStyles={classes.section} />
      <GetStarted sectionStyles={classes.section} />
      <Blog sectionStyles={classes.section} />
      <Contact sectionStyles={classes.section} />
    </div>
  );
};

export default App;
