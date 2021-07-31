import React from 'react';

import {
  contactSocial,
  socialBox,
  socialIcons,
  facebook,
  twitter,
  linkedin,
  google,
  dribble,
} from './ContactSocial.module.scss';

const ContactSocial = () => {
  return (
    <section className={` ${contactSocial}`}>
      <div className="container-md">
        <div className={socialBox}>
          <div className={socialIcons}>
            <a
              href="https://www.facebook.com/khaled.refaatelkady/"
              target="_blank"
              rel="noreferrer"
              className={facebook}
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://twitter.com/KhaledR15807100"
              target="_blank"
              rel="noreferrer"
              className={twitter}
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/khaled-refaat-elkady-370305168/"
              target="_blank"
              rel="noreferrer"
              className={linkedin}
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              className={google}
            >
              <i className="fab fa-google-plus-g" />
            </a>
            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noreferrer"
              className={dribble}
            >
              <i className="fab fa-dribbble" />
            </a>
          </div>
          <p>
            <i className="fas fa-phone" /> +91 123 4556 789
          </p>
          <p>
            <i className="far fa-envelope-open" /> Support@info.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSocial;
