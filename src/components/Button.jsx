import React from "react";
import { btn, curved, white } from "./Button.module.scss";

const Button = ({ children, iswhite, isCurved }) => {
  return (
    <button
      className={`${btn} ${iswhite ? white : ""} ${isCurved ? curved : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
