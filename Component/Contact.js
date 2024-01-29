import React from 'react';

const ContactSection = () => {
    return (
        <div className="section animated-row" data-section="slide07">
            <div className="section-inner">
                <div className="row justify-content-center">
                    <div className="col-md-7 wide-col-laptop">
                        <div className="title-block animate" data-animate="fadeInUp">
                            <span>Contact</span>
                            <h2>Get In Touch!</h2>
                        </div>
                        <div className="contact-section">
                            <div className="row">
                                <div className="col-md-6 animate" data-animate="fadeInUp">
                                    <div className="contact-box">
                                        <div className="contact-row">
                                            <i className="fa fa-map-marker"></i> 123 New Street Here, Wonderful City 10220
                                        </div>
                                        <div className="contact-row">
                                            <i className="fa fa-phone"></i> 090 080 0210
                                        </div>
                                        <div className="contact-row">
                                            <i className="fa fa-envelope"></i> info@company.co
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 animate" data-animate="fadeInUp">
                                    <form id="ajax-contact" method="post" action="#">
                                        <div className="input-field">
                                            <input type="text" className="form-control" name="name" id="name" required placeholder="Name" />
                                        </div>
                                        <div className="input-field">
                                            <input type="email" className="form-control" name="email" id="email" required placeholder="Email" />
                                        </div>
                                        <div className="input-field">
                                            <textarea className="form-control" name="message" id="message" required placeholder="Message"></textarea>
                                        </div>
                                        <button className="btn" type="submit">Submit</button>
                                    </form>
                                    <div id="form-messages" className="mt-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
