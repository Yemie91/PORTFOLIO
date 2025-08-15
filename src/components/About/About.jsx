import React, { useEffect } from 'react';
import './About.css';
import aboutpics from '../../assets/aboutpics.jpg';

function About() {
    
  useEffect(() => {
    const bars = document.querySelectorAll('.skill-bar');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
            observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.5 }
    );

    bars.forEach(bar => {
      bar.style.width = '0'; // Start from 0
      observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='about' id='about'>
      <div className='about-title'>
        <h1>About Me</h1>
      </div>

      <div className='about-section'>
        <div className='about-left'>
          <img src={aboutpics} alt="Profile" />
        </div>

        <div className='about-right'>
          <div className='about-para'>
            <p>
              I build clean, user-friendly digital products. From design to code,
              I help brands create websites and apps that truly work.
            </p>
            <p>
              Passionate about blending design, function, and emotion into every project.
            </p>
          </div>

          <div className='about-skills'>
            <div className='about-skill'>
              <p>HTML & CSS</p>
              <hr className='skill-bar' data-width="70%" />
            </div>
            <div className='about-skill'>
              <p>React Js/Native</p>
              <hr className='skill-bar' data-width="60%" />
            </div>
            <div className='about-skill'>
              <p>JavaScript</p>
              <hr className='skill-bar' data-width="50%" />
            </div>
            
            <div className='about-skill'>
              <p>Photoshop / UI/UX</p>
              <hr className='skill-bar' data-width="80%" />
            </div>
            
            <div className='about-skill'>
              <p>Wordpress</p>
              <hr className='skill-bar' data-width="70%" />
            </div>
          </div>
        </div>
      </div>

      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>33+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>20+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
