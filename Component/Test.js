import React, { useEffect, useState } from 'react';

const CounterSection = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!animated) {
        const oTop = document.getElementById('counter').offsetTop - window.innerHeight;
        if (window.scrollY > oTop) {
          document.querySelectorAll('.counter-value').forEach(element => {
            const countTo = element.getAttribute('data-count');
            const duration = 5000;
            const startTime = Date.now();
            
            const updateCounter = () => {
              const currentTime = Date.now();
              const progress = (currentTime - startTime) / duration;

              if (progress < 1) {
                const countNum = Math.floor(parseInt(element.textContent) + (countTo - parseInt(element.textContent)) * progress);
                element.textContent = countNum;
                requestAnimationFrame(updateCounter);
              } else {
                element.textContent = countTo;
              }
            };

            updateCounter();
          });

          setAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animated]);
  return (
    <section className="section-padding pb-70 bg-img fact-counter fact" id="counter" >
      <div className="container">
        <div className="row ">
          <div className="col-lg-3 col-md-6 l-md-6 text-center ">
            <div className="single-fun-fact">
              <h2><span className="counter-value" data-count="08">0</span>+</h2>
              <p>Years Experience</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="single-fun-fact">
              <h2><span className="counter-value" data-count="600">0</span>+</h2>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="single-fun-fact">
              <h2><span className="counter-value" data-count="09">0</span>+</h2>
              <p>Awards Win</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="single-fun-fact">
              <h2><span className="counter-value" data-count="451">0</span>+</h2>
              <p>Cups of Coffee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;

