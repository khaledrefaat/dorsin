import React from "react";
import { description } from "./Description.module.scss";

const Description = (props) => {
  return (
    <p className={description}>
      {props.children ? props.children : props.description}
    </p>
  );
};

export default Description;
