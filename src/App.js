import React from "react";

import Header from "./sections/Header";
import Services from "./sections/Services";
import Features from "./sections/Features";
import WebDesc from "./sections/WebDesc";
import Pricing from "./sections/Pricing";
import Team from "./sections/Team";

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
    </div>
  );
};

export default App;
