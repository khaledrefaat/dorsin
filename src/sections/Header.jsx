import React from 'react';
import { header } from './Header.module.scss';

import Nav from '../components/Nav';
import HeadingDescription from '../components/HeadingDescription';
import BgLayout from '../components/BgLayout';
import backgroundImg from '../images/bg-home.jpg';

const Header = () => {
  return (
    <header
      id="home"
      className={header}
      style={{ backgroundImage: `url(${backgroundImg})` }}
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
