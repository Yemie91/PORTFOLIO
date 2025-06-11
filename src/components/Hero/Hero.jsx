import React from 'react';
import './Hero.css';
import  profile from '../../assets/profile.jpg'

function Hero() {
  return (

    <div className='hero' id='hero'>

        <img src={profile} alt="" />

        <h1>
           I'm <span className="highlighted-name">Adebayo Yemi</span>, a product designer and 
           web/app developer based in Lagos, Nigeria.
         </h1>

       

        <p> A passionate product designer,
         web, and app developer from Nigeria. With a strong eye for 
        design and seamless user experience, I craft innovative digital solutions for modern brands. My work blends creativity and functionality to deliver impactful 
        products that solve real-world problems across platforms and devices.
        </p>

        <div className="btn-group">
         <a href="#contact" className="btn">Connect with me</a>
         
         <a href="/Yemi-Resume.png" className="btn" download="Yemi-Resume.png">
                Download PDF Resume 
         </a>

         

        </div>


    </div>
  )
}

export default Hero