import React from 'react';
import king from './img/profile-img.jpg';
 
const Header = () => {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <div className="home-img">
            <div className="circle">
              <span></span>
              <span></span>
              <div className="image">
                <img src={king} alt="" className="img-fluid rounded-circle" />
              </div>
            </div>
          </div>

          <h1 className="animates-charcter" data-aos="zoom-in-up">
            <a href="index.html">Mr. Rafaqat</a>
          </h1>

          <div className="social mt-3 text-center">
            <a href="#" className="twitter" data-aos="fade-down-left">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="facebook" data-aos="fade-right">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="whatsapp" data-aos="fade-left">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#" className="instagram" data-aos="fade-down-right">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <hr />

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li>
              <a href="#hero" className="nav-a scrollto active">
                <i className="fa-solid fa-house" data-aos="fade-right"></i>
                <span data-aos="fade-left">Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-a scrollto">
                <i className="fa-solid fa-address-card" data-aos="fade-right"></i> <span data-aos="fade-left">About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-a scrollto">
                <i className="fa-solid fa-file" data-aos="fade-right"></i> <span data-aos="fade-left">Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-a scrollto">
                <i className="fa-solid fa-briefcase" data-aos="fade-right"></i> <span data-aos="fade-left">Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services" className="nav-a scrollto">
                <i className="fa-solid fa-server" data-aos="fade-right"></i> <span data-aos="fade-left">Services</span>
              </a>
            </li>
            <li>
              <a href="#cshark" className="nav-a scrollto">
                <i className="fa-regular fa-address-book" data-aos="fade-right"></i> <span data-aos="fade-left">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
