import React from "react";
import Button from "./Button";

import {
  nav,
  nav__brand,
  nav__list,
  nav__item,
  nav__icon,
} from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav class={nav}>
      <div className={nav__brand}>
        <a href="#home">dorsin</a>
      </div>
      <i class={`fas fa-bars ${nav__icon}`} />
      <ul className={nav__list}>
        <li className={nav__item}>
          <a href="#home">home</a>
        </li>
        <li className={nav__item}>
          <a href="#services">services</a>
        </li>
        <li className={nav__item}>
          <a href="#features">features</a>
        </li>
        <li className={nav__item}>
          <a href="#pricing">pricing</a>
        </li>
        <li className={nav__item}>
          <a href="team">team</a>
        </li>
        <li className={nav__item}>
          <a href="#blog">blog</a>
        </li>
        <li className={nav__item}>
          <a href="#contact">contact</a>
        </li>
        <li className={nav__item}>
          <Button isCurved>Try it free</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
