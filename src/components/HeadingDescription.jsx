import React from "react";

import { container, heading } from "./HeadingDescription.module.scss";

import Description from "./Description";

const HeadingDescription = ({
  large,
  small,
  headingContent,
  description,
  Button,
}) => {
  return (
    <div className={container}>
      <h1 className={heading}>{headingContent}</h1>
      <Description>{description}</Description>
      {Button ? <Button /> : null}
    </div>
  );
};

export default HeadingDescription;
