import React from 'react';

const  Serve= () => {
  return (
    <section id="service" className="section-padding pb-70 service-area bg-light">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h2>Service</h2>
              <p style={{color:"black",padding:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-service">
              <div className="service-icon">
                <i className="fa fa-code"></i>
              </div>
              <h2>Web Design</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente minima repudiandae amet, accusamus ea impedit aperiam consectetur libero. Deleniti id sit minima.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service">
              <div className="service-icon">
                <i className="fa fa-chart-area"></i>
              </div>
              <h2>Business Services</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente minima repudiandae amet, accusamus ea impedit aperiam consectetur libero. Deleniti id sit minima.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-service">
              <div className="service-icon">
                <i className="fa fa-chart-line"></i>
              </div>
              <h2>Business Services</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente minima repudiandae amet, accusamus ea impedit aperiam consectetur libero. Deleniti id sit minima.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Serve;

