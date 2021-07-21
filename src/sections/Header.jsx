import React from "react";
import { header, header__layout, header__pattern } from "./Header.module.scss";

import Nav from "../components/Nav";
import HeadingDescription from "../components/HeadingDescription";
import BgLayout from "../components/BgLayout";

const Header = () => {
  return (
    <header
      className={header}
      style={{ backgroundImage: 'url("/images/bg-home.jpg")' }}
    >
      <BgLayout />
      <Nav />
      <HeadingDescription
        headingContent="We help startups launch their products"
        description="Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus quam.Lorem ipsum dolor sit amet, consectetur adipisicing eli."
      />
    </header>
  );
};

export default Header;
