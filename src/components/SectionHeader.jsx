import React from "react";
import classes from "./SectionHeader.module.scss";

const SectionHeader = ({ header, description }) => {
  return (
    <>
      <h1 className={classes.header}>
        {header}
        <div className={classes.border} />
      </h1>
      <p className={classes.description}>{description}</p>
    </>
  );
};

export default SectionHeader;
