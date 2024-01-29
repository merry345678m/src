import React, { useState } from 'react';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="container" id='cshark'>
          <h2 className='c mt-4'><strong> <b>Contact</b></strong></h2>
          <p>
Feel free to reach out for collaboration or inquiries. I'm easily accessible via email at [YourEmailAddress] or connect with me on LinkedIn. Looking forward to discussing potential projects, partnerships, or any questions you may have.</p>
       
     
    <div className={`container mt-5 ${isSignUp ? 'active' : ''}`} id="container">
      <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
      <form>
          <h1>{isSignUp ? 'Create Account' : 'Sign In'}</h1>
          {/* <div className="social-icons" id='social-icons'> */}
          <div className="social mt-3 text-center bg-white" >
             
             <a href="#" className="twitter" data-aos="fade-down-left">
             <i className="fa-brands fa-twitter " style={{color:"white"}}></i>
            </a>
             
             
             <a href="#" className="facebook" data-aos="fade-right">
             <i className="fa-brands fa-facebook" style={{color:"white"}}></i>
             </a>
             
             <a href="#" className="whatsapp" data-aos="fade-left">
             <i className="fa-brands fa-whatsapp" style={{color:"white"}}></i>
            </a>
             
              
             <a href="#" className="instagram" data-aos="fade-down-right">
             <i className="fa-brands fa-instagram" style={{color:"white"}}></i>
             </a>
          
             </div>
          {/* </div> */}
          {isSignUp ? (
            <>
              <span>or use your email for registration</span>
              {/* <input type="text" placeholder="Name" /> */}
            </>
          ) : (
            <span>or use your email and password</span>
          )}
           <input type="text" placeholder="Name" data-aos="zoom-in-up"/>
          <input type="email" placeholder="Email" data-aos="fade-down-right"/>
          <input type="password" placeholder="Password" data-aos="fade-up"/>
          <input type="Number" placeholder="Phone Nbr" data-aos="fade-down-left"/>
          {isSignUp && <button onClick={toggleForm}>Sign Up</button>}
          {!isSignUp && <a href="#">Forget Your Password?</a>}
          <button>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className={`toggle ${isSignUp ? 'sign-up-panel-active' : ''}`}>
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" onClick={toggleForm} data-aos="zoom-in-up">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className="hidden" onClick={toggleForm} data-aos="zoom-in-up">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
