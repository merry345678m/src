import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>
          I specialize in diverse areas, offering expertise as a React Native developer, full-stack web developer, and web designer. With a focus on creating seamless user experiences and robust applications, I bring a versatile skill set to deliver innovative solutions that meet the dynamic needs of modern digital environments.
          </p>
        </div>
        <div className="row">
          <ServiceItem
            iconClass =  "fa-brands fa-dribbble" 
            title="Lorem Ipsum"
            description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
          />
          <ServiceItem
            iconclassName="fa-brands fa-firefox"    
            title="Sed ut perspiciatis"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
          />
          <ServiceItem
            iconclassName="fa-brands fa-stack-overflow"    
            title="Magni Dolores"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
          />
          <ServiceItem
            iconclassName="fa-brands fa-wordpress"    
            title="Nemo Enim"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ iconClass, title, description }) => {
  return (
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div className="icon-box">
        <div className="icon">
          <i className={iconClass}></i>
        </div>
        <h4 className="title">
          <a href="">{title}</a>
        </h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};


export default ServicesSection;
