import React from 'react';

const MyWorkSection = () => {
  return (
    <div className="section animated-row" data-section="slide06">
      <div className="section-inner">
        <div className="row justify-content-center">
          <div className="col-md-8 wide-col-laptop">
            <div className="title-block animate" data-animate="fadeInUp">
              <span>My Work</span>
              <h2>what i’ve done?</h2>
            </div>
            <div className="gallery-section">
              <div className="gallery-list owl-carousel">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <div
                    key={item}
                    className="item animate"
                    data-animate="fadeInUp"
                  >
                    <div className="portfolio-item">
                      <div className="thumb">
                        <img
                          src={`images/item-${item}.jpg`}
                          alt={`Item ${item}`}
                        />
                      </div>
                      <div
                        className="thumb-inner animate"
                        data-animate="fadeInUp"
                      >
                        <h4>templatemo is the best</h4>
                        <p>
                          Please tell your friends about it. Templatemo is the
                          best website to download free Bootstrap templates.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorkSection;
