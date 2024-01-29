import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container">
        <svg viewBox="0 0 960 300" data-aos="zoom-in-up">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="80%">
            Welcome
            </text>
            <text textAnchor="middle" x="52%" y="80%">
            Welcome
            </text>
          </symbol>

          <g className="g-ants">
            {[...Array(5)].map((_, index) => (
              <use key={index} href="#s-text" className="text-copy"></use>
            ))}
          </g>
        </svg>

        {/* <div className="col-md-12 text-center">
          <h1 className="animate-charcter" data-aos="zoom-in-up">
          Mr. Rafaqat
          </h1>
        </div> */}

        {/* <h1 data-aos="fade-down-right">Mr. Rafaqat</h1> */}
        <h1 className="animate-charcter" data-aos="fade-down-right">
          Mr. Rafaqat
          </h1>
          
        <p data-aos="fade-up">
          I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"> Developer</span>
        </p>
      </div>
      <a href="#about" className="btn-get-started scrollto" id='king'><i className="fa-solid fa-angles-down" data-aos="fade-down-right"></i></a>
    </section>
  );
};

export default HeroSection;
