import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const skillsRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const offsetTop = skillsRef.current.offsetTop;
        const height = window.innerHeight;
        
        if (window.scrollY + height > offsetTop) {
          document.querySelectorAll('.skillbar').forEach(skillbar => {
            const percent = skillbar.getAttribute('data-percent');
            skillbar.querySelector('.skillbar-bar').style.width = percent;
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [skillsRef]);
  return (
    <section id="about" className="section-padding about-area bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2>About Me</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus placeat unde non modi, facilis, quae?</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="about-bg" >
              <div className="social-aria">
                <a target="_blank" href="#"><i className="fab fa-facebook-f"></i></a>
                <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                <a target="_blank" href="#"><i className="fab fa-instagram"></i></a>
                <a target="_blank" href="#"><i className="fab fa-pinterest"></i></a>
                <a target="_blank" href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6" ref={skillsRef}>
            <div className="about-content">
              <h2>Hello, I am <span>AL Mamun</span></h2>
              <h4>Graphic Designer and Web Designer</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis numquam ipsam ut deleniti perferendis aliquid ullam, voluptatibus nam sunt eum laudantium cupiditate iste, obcaecati deserunt dolores aliquam quia cum minus animi ipsa est facere culpa fugiat, maxime quam! Itaque aperiam sequi accusantium impedit recusandae nobis quod sunt deserunt provident omnis.</p>

              <h5>My Skills</h5>
              <div id="skills" className="skill-area">
                <div className="single-skill">
                  <div className="skillbar" data-percent="100%">
                    <div className="skillbar-title"><span>HTML5</span></div>
                    <div className="skillbar-bar"></div>
                    <div className="skill-bar-percent">100%</div>
                  </div>
                </div>
                <div className="single-skill">
                  <div className="skillbar" data-percent="85%">
                    <div className="skillbar-title"><span>CSS3</span></div>
                    <div className="skillbar-bar"></div>
                    <div className="skill-bar-percent">85%</div>
                  </div>
                </div>
                <div className="single-skill">
                  <div className="skillbar" data-percent="50%">
                    <div className="skillbar-title"><span>JS</span></div>
                    <div className="skillbar-bar"></div>
                    <div className="skill-bar-percent">50%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

