import React, { useEffect } from 'react';
import king1 from './img/profile-img.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>
            Experienced frontend developer with a track record of three years, adept at leveraging skills in HTML, CSS, and JavaScript. Specialized in React Native, I excel in creating engaging and responsive cross-platform applications for an enhanced user experience.</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={king1} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p className="fst-italic">

              Versatile UI/UX Designer and Web Developer, merging creativity with technical expertise. Proficient in crafting visually appealing interfaces and responsive websites for an immersive user experience.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 June 2004</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+92 3186282213</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Bahawalpur, Pakistan</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bacholar</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>rafaqatalimrafaqat@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              Dedicated UI/UX Designer & Web Developer with a passion for crafting engaging digital experiences. Proficient in merging creativity with functionality to deliver aesthetically pleasing and user-friendly designs. Committed to transforming ideas into visually compelling and responsive websites, ensuring an impactful online presence.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

