import React from "react";
import { btn, curved, white } from "./Button.module.scss";

const Button = ({ children, iswhite, isCurved, styles }) => {
  return (
    <button
      className={`${btn} ${iswhite ? white : ""} ${isCurved ? curved : ""} ${
        styles ? styles : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
