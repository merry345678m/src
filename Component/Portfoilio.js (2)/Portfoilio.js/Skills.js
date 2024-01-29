import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>
A proficient web developer with skills in HTML5, CSS3, JavaScript, PHP, React, ,jQuery, Woordpress and Bootstrap possesses a robust toolkit for creating dynamic and responsive web applications. This skill set covers the entire development process, from front-end design to back-end logic, facilitating versatile and efficient web and mobile app development.</p>
        </div>
          <div className="row" data-aos-delay="100">
				<div className="col-md-6">
					<div className="progress-wrap" data-aos="zoom-in-up">
						<h3><span className="name-left">HTML5/CSS3</span><span className="value-right">99%</span></h3>
						<div className="progress">
						  <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
						  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width:"99%"}}>
						  </div>
						</div>
					</div>
					<div className="progress-wrap" data-aos="zoom-in-up" >
						<h3><span className="name-left">WordPress</span><span className="value-right">90%</span></h3>
						<div className="progress">
						  <div className="progress-bar progress-bar-2 progress-bar-striped active" role="progressbar"
						  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width:"90%"}}>
						  </div>
						</div>
					</div>
					<div className="progress-wrap" data-aos="fade-down-left">
						<h3><span className="name-left">PHP</span><span className="value-right">80%</span></h3>
						<div className="progress">
						  <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
						  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width:"80%"}}>
						  </div>
						</div>
					</div>
					<div className="progress-wrap" data-aos="fade-down-left">
						<h3><span className="name-left">Javascript</span><span className="value-right">85%</span></h3>
						<div className="progress">
						  <div className="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar"
						  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width:"85%"}}>
						  </div>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="progress-wrap" data-aos="zoom-in-up">
						<h3><span className="name-left">Design</span><span className="value-right">100%</span></h3>
						<div className="progress">
						  <div className="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar"
						  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width:"100%"}}>
						  </div>
						</div>
					</div>
					<div className="progress-wrap" data-aos="zoom-in-up">
						<h3><span className="name-left">React</span><span className="value-right">97%</span></h3>
						<div className="progress">
						  <div className="progress-bar progress-bar-striped active" role="progressbar"
						  aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width:"97%"}}>
						  </div>
						</div>
					</div>
					<div className="progress-wrap" data-aos="fade-down-right">
						<h3><span className="name-left">Bootstrap</span><span className="value-right">85%</span></h3>
						<div className="progress">
						  <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
						  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width:"85%"}}>
						  </div>
						</div>
					</div>
					<div className="progress-wrap" data-aos="fade-down-right">
						<h3><span className="name-left">jQuery</span><span className="value-right">75%</span></h3>
						<div className="progress">
						  <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
						  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width:"75%"}}>
						  </div>
						</div>
					</div>
				</div>
			</div>

          </div>
 
    </section>
  );
};

export default SkillsSection;
