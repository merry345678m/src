
import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import main styles
import 'swiper/css/pagination'; // Import pagination styles

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
          <SwiperSlide>
            {/* Testimonial content */}
          </SwiperSlide>

          {/* Repeat the above pattern for other testimonials */}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;