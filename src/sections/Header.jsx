import React from "react";
import { header, header__layout, header__pattern } from "./Header.module.scss";

import Nav from "../components/Nav";

const Header = () => {
  return (
    <header
      className={header}
      style={{ backgroundImage: 'url("/images/bg-home.jpg")' }}
    >
      <div className={header__layout} />
      <div className={header__pattern}>
        <img src="/images/bg-pattern.png" alt="pattern" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
