import React from 'react';

const Navbar = () => {
  return (
    <header id="header" className="header">

    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">

            <a className="navbar-brand logo" href="index.html">
                <img src="assets/images/logo.png" alt="logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false"><span><i className="fa fa-bars"></i></span></button>
  <div className="collapse navbar-collapse main-menu" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto ms-auto">
                    <li className="nav-item active"><a className="nav-link" href="#home">HOME</a></li>
                    <li className="nav-item"><a className="nav-link" href="#about">ABOUT</a></li>
                    <li className="nav-item"><a className="nav-link" href="#service">SERVICE</a></li>
                    <li className="nav-item"><a className="nav-link" href="#portfolio">PORTFOLIO</a></li>
                    <li className="nav-item"><a className="nav-link" href="blog.html">BLOG</a></li>
                    <li className="nav-item"><a className="nav-link pr0" href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </div>
    </nav>

</header>
  );
};

export default Navbar;


