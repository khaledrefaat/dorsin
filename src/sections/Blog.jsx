import React from 'react';
import SectionHeader from '../components/SectionHeader';

import { blog, blogBox } from './Blog.module.scss';

const Blog = ({ sectionStyles }) => {
  return (
    <section className={`${sectionStyles} ${blog}`}>
      <div className="container">
        <div className="row">
          <div className="col">
            <SectionHeader
              header="BLOG"
              description="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus luctus quam."
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-12">
            <div className={blogBox}>
              <img
                src="/images/brooke-cagle-blog.jpg"
                alt="ui ux blog"
                className="mt-3"
              />
              <h5 className="mt-3">UI & UX Design</h5>
              <h4 className="mt-3">
                <a href="#">Doing a cross country road trip</a>
              </h4>
              <p>
                She packed her seven versalia, put her initial into the belt and
                made herself on the way..
              </p>
              <div>
                <a href="#">Read More &#10132;</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className={blogBox}>
              <img
                src="/images/campaign-creators.jpg"
                alt="digital marketing blog"
                className="mt-3"
              />
              <h5 className="mt-3">Digital Marketing</h5>
              <h4 className="mt-3">
                <a href="#">New exhibition at our Museum</a>
              </h4>
              <p>
                Pityful a rethoric question ran over her cheek, then she
                continued her way.
              </p>
              <div>
                <a href="#">Read More &#10132;</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className={blogBox}>
              <img
                src="/images/steven-lewis.jpg"
                alt="travelling blog"
                className="mt-3"
              />
              <h5 className="mt-3">Travelling</h5>
              <h4 className="mt-3">
                <a href="#">Why are so many people..</a>
              </h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
              <div>
                <a href="#">Read More &#10132;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
