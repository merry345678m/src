import React from 'react'
import img1 from './Image/sven-mieke-KxEBySpHZA4-unsplash.jpg';
import img2 from './Image/man-hanging-out-with-robot_.jpg'
export default function Hero() {
  return (
    <parallex>
      <div className='Container'>
        <div className="free ms-auto mt-4" style={{marginRight:"15%"}}></div>
        <div class="main">
        <div className="free2 container"> 
            <div className="freechild1 ">
                <img src={{img1}} alt=""  style={{height:"500px", width:"700px"}}/>
            </div>
            <div className="freechild2">
                <h1>Our Robo-Buddies: Partners in Tomorrow's Adventures</h1>
                <p>Get ready for a glimpse into a world where robots take center stage in shaping our future. From transforming industries to enhancing everyday life, let's explore how these technological wonders are set to become an integral part of our journey forward.</p>
            </div>
        </div>
        <div class="free3">
          <img src={{img2}} alt="" style={{height:"500px", width:"700px"}}/>
        </div>
        </div>
      </div>
    </parallex>
  )
}
