import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Typed from 'typed.js'; // Import Typed.js library
import $ from 'jquery'; // Import jQuery

const Home = () => {
  useEffect(() => {
    // Target the element where you want to apply Typed animation
    const element = $('.typed')[0];

    // Typed.js options
    const options = {
      strings: ["Web Developer", "Web Designer"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      callback: function() {
        // Callback when typing is complete
        console.log('Typed animation complete.');
      },
    };

    // Initialize Typed
    const typed = new Typed(element, options);

    // Cleanup function
    return () => {
      typed.destroy();
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, 
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="kind">
            <h1>LET'S BEGIN</h1>
            <h4 className="text-uppercase"><span className="typed"></span></h4>
            <p>Make designed by as Begindot.</p>
            <button className='button'>Learn More</button>
          </div>
        </div>
      </div>
      <div className="hero-area-slids slick">
        <Slider {...settings}>
          <div className="single-slider">
            <div className="slider-bg" ></div>
          </div>
          <div className="single-slider">
            <div className="slider-bg2" ></div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Home;
