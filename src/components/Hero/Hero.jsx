


import React, { useEffect, useRef } from 'react'
import hispics from "../../assets/hispics.jpg"
import Typewriter from 'typewriter-effect/dist/core';

import '../Hero/Hero.css'


function Hero() {

  const typewriterRef = useRef(null);

  const startTyping = () => {
    if (typewriterRef.current) {
      typewriterRef.current.innerHTML = ''; // Clear previous content

      new Typewriter(typewriterRef.current, {
        loop: false,
        delay: 50,
      })
        .typeString(
          `I'm <span class="highlighted-name"> Babajere Oni (Yemi) </span>, 
          a product designer and web/app developer based in Lagos, Nigeria..`
        )
        .pauseFor(10000)
        .deleteAll(20)
        .start();  
    }
  };

  useEffect(() => {
    startTyping(); // Initial typing
    const interval = setInterval(() => {
      startTyping(); // Repeat every 30 seconds
    }, 30000);
    return () => clearInterval(interval); // Clean up
  }, []);


  return (

    <div className='hero' id='hero'>

        <img src={hispics} alt="" />
      
 <div className="typing-container">
  <h1 ref={typewriterRef}></h1>
</div>



       

        <p> A passionate product designer,
         web, and app developer from Nigeria. With a strong eye for 
        design and seamless user experience, I craft innovative digital solutions for modern brands. My work blends creativity and functionality to deliver impactful 
        products that solve real-world problems across platforms and devices.
        </p>

        <div className="btn-group">
         <a href="#contact" className="btn">Connect with me</a>
         
         <a href="/Yemi-Resume.jpg" className="btn" download="Yemi-Resume.jpg">
                Download PDF Resume 
         </a>

         

        </div>


    </div>
  )
}

export default Hero