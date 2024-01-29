import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import main styles
import 'swiper/css/pagination'; // Import pagination styles
import TestimonialSlide from './TestimonialSlide'; // Import the TestimonialSlide component
import './your-other-styles.css'; // Import other necessary styles

// Initialize SwiperCore with required modules
SwiperCore.use([Pagination]);

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <Swiper
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
          pagination={{ clickable: true }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <TestimonialSlide />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="testimonial-item" data-aos="fade-up">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Another set of content for the second slide.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
              <h3>Jane Doe</h3>
              <h4>CTO</h4>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="testimonial-item" data-aos="fade-up">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                More content for the third slide.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
              <h3>John Smith</h3>
              <h4>Lead Developer</h4>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="testimonial-item" data-aos="fade-up">
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Final set of content for the fourth slide.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
              <h3>Alice Johnson</h3>
              <h4>Marketing Manager</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
