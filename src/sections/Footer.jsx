import React from 'react';

import { footer, payment } from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={footer}>
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-lg-3 col-md-12">
            <h4 className="mb-4">Dorsin</h4>
            <ul>
              <li className="mb-2">
                <a href="#">home</a>
              </li>
              <li className="mb-2">
                <a href="#">about us</a>
              </li>
              <li className="mb-2">
                <a href="#">careers</a>
              </li>
              <li>
                <a href="#">contact us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12">
            <h4 className="mb-4">information</h4>
            <ul>
              <li className="mb-2">
                <a href="#">term & condition</a>
              </li>
              <li className="mb-2">
                <a href="#">about us</a>
              </li>
              <li className="mb-2">
                <a href="#">jobs</a>
              </li>
              <li>
                <a href="#">bookmarks</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12">
            <h4 className="mb-4">support</h4>
            <ul>
              <li className="mb-2">
                <a href="#">support</a>
              </li>
              <li className="mb-2">
                <a href="#">faq</a>
              </li>
              <li>
                <a href="#">disscusion</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12">
            <h4 className="mb-4">subscripe</h4>
            <ul className="mb-4">
              <li>
                <a href="#">
                  In an ideal world this text wouldn’t exist, a client would
                  acknowledge the importance of having web copy before the
                  design starts.
                </a>
              </li>
            </ul>
            <form onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Email" />
              <button type="submit">
                <i class="far fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={`row ${payment}`}>
        <div className="col-md-6 col-sm-12">
          2019 - 2020 © Dorsin - Themesbrand payment
        </div>
        <div className="col-md-6 col-sm-12">
          <img src="/images/payment.png" alt="payment" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
