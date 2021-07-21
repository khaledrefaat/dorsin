import React from "react";

import HeadingDescription from "../components/HeadingDescription";
import BgLayout from "../components/BgLayout";
import Button from "../components/Button";

import { webdesc } from "./WebDesc.module.scss";

const WebDesc = () => {
  return (
    <section
      className={webdesc}
      style={{ backgroundImage: 'url("/images/coworkers.jpg")' }}
    >
      <BgLayout />
      <HeadingDescription
        headingContent="Build your dream website today"
        description="But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her."
        Button={() => <Button iswhite>view plan & pricing</Button>}
      />
    </section>
  );
};

export default WebDesc;
