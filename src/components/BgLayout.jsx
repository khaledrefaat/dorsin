import React from "react";

import { bglayout, bgpattern } from "./BgLayout.module.scss";

const bgLayout = () => {
  return (
    <>
      <div className={bglayout} />
      <div className={bgpattern}>
        <img src="/images/bg-pattern.png" alt="pattern" />
      </div>
    </>
  );
};

export default bgLayout;
