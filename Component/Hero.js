import React from 'react';

const FeaturedSection = () => {
  return (
    <section id="featured" className=" section-padding pb-70">
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 col-md-6">
            <div className="single-featured-item-wrap">
              <h3><a href="#">Graphic Design</a></h3>
              <div className="single-featured-item">
                <div className="featured-icon">
                  <i className="fa fa-edit"></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptatibus, sunt. Recusandae ab aliquid voluptate exercitationem dicta ipsa, odio cumque sapiente quaerat nisi ad rem dolor iusto.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-featured-item-wrap">
              <h3><a href="#">Web Design</a></h3>
              <div className="single-featured-item">
                <div className="featured-icon">
                  <i className="fa fa-code"></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptatibus, sunt. Recusandae ab aliquid voluptate exercitationem dicta ipsa, odio cumque sapiente quaerat nisi ad rem dolor iusto.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-featured-item-wrap">
              <h3><a href="#">SEO Services</a></h3>
              <div className="single-featured-item">
                <div className="featured-icon">
                  <i className="fa fa-search"></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptatibus, sunt. Recusandae ab aliquid voluptate exercitationem dicta ipsa, odio cumque sapiente quaerat nisi ad rem dolor iusto.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
