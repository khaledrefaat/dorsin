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
              <i class="fab fa-facebook-f" />
            </a>
            <a
              href="https://twitter.com/KhaledR15807100"
              target="_blank"
              rel="noreferrer"
              className={twitter}
            >
              <i class="fab fa-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/khaled-refaat-elkady-370305168/"
              target="_blank"
              rel="noreferrer"
              className={linkedin}
            >
              <i class="fab fa-linkedin-in" />
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              className={google}
            >
              <i class="fab fa-google-plus-g" />
            </a>
            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noreferrer"
              className={dribble}
            >
              <i class="fab fa-dribbble" />
            </a>
          </div>
          <p>
            <i class="fas fa-phone" /> +91 123 4556 789
          </p>
          <p>
            <i class="far fa-envelope-open" /> Support@info.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSocial;
