import React from 'react';
import './Services.css';

function Service() {
  return (
    <div className='services' id='services'>
      <div className='services-title'>
        <h1>My Services</h1>
        
      </div>

<div className='services-container'>

        <div className='services-container1'>

        <div className='service-box'>
           <h2>Web Development</h2>
          <p>Modern and responsive websites using the latest web technologies.</p>
        </div>

       <div className='service-box'>
          <h2>Mobile App Development</h2>
          <p>Cross-platform mobile apps built for iOS and Android.</p>
       </div>

       </div>

       <div className='services-container2'>


  <div className='service-box'>
    <h2>UI/UX Design</h2>
    <p>Intuitive and clean design tailored for great user experience.</p>
  </div>

  <div className='service-box'>
    <h2>Graphic Design</h2>
    <p>Creative designs for logos, branding, flyers, and digital assets that make your brand stand out.</p>
  </div>
       </div>

</div>

    </div>
  );
}

export default Service;
