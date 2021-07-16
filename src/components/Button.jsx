import React from "react";
import { btn } from "./Button.module.scss";

const Button = ({ children, white, curved }) => {
  return (
    <button className={`${btn} ${white ? white : ""} ${curved ? curved : ""}`}>
      {children}
    </button>
  );
};

export default Button;
