import React from 'react';
import Counter from './Counter';
const FactsSection = () => {
  return (
    <section id="facts" className="facts">
      <div className="container">

        <div className="section-title">
          <h2>Facts</h2>
          <p>
            Passionate frontend developer known for transforming visions into reality. Recognized for client satisfaction, dedication, and hard work. Excels in creating user-centric designs, ensuring delightful experiences.
          </p>
        </div>

        <div className="row no-gutters">

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
            <div className="count-box">
              <i className="fa-regular fa-face-smile"></i>
              <span><Counter start={0} end={344} step={1} intervalDuration={30} /></span>
              <p><strong>Happy Clients</strong> consequuntur quae</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="count-box">
              <i className="fa-brands fa-product-hunt"></i>
              <span><Counter start={0} end={534} step={1} intervalDuration={30} /></span>
              <p><strong>Projects</strong> adipisci atque cum quia aut</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="count-box">
              <i className="fa-solid fa-headset"></i>
              <span><Counter start={0} end={635} step={1} intervalDuration={30} /></span>
              <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="count-box">
              <i className="fa-solid fa-people-group"></i>
              <span><Counter start={0} end={378} step={1} intervalDuration={30} /></span>
              <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FactsSection;
