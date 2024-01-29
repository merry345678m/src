import React from "react";
import Slider from "react-slick";
import king10 from './img/portfolio/portfolio-9.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow next" onClick={onClick}>
        Next
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow prev" onClick={onClick}>
        Prev
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Custom component for the next arrow
    prevArrow: <PrevArrow />, // Custom component for the previous arrow
  };

  return (
    <Slider {...settings}>
      <div>
        <h3> 
          <img src={king10} alt=""/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in.</p>
          <button className="btn btn-primary">learn more </button>
        </h3>
      </div>
      <div>
        <h3> 
          <img src={king10} alt=""/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in.</p>
          <button className="btn btn-primary">learn more </button>
        </h3>
      </div>
      <div>
        <h3> 
          <img src={king10} alt=""/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in.</p>
          <button className="btn btn-primary">learn more </button>
        </h3>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;
