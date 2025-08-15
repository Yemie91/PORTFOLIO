// import React from 'react'
// import './Mywork.css'
// import work1 from '../../assets/work1.jpg'

// const works = [
//   { id: 1, title: 'Broker Investment Website', img: work1 },
//   { id: 2, title: 'Broker Investment Website', img: work1 },
//   { id: 3, title: 'Broker Investment Website', img: work1 },
//   { id: 4, title: 'Broker Investment Website', img: work1 },
//   { id: 5, title: 'Broker Investment Website', img: work1 },
//   { id: 6, title: 'Broker Investment Website', img: work1 },
// ]

// function Mywork() {
//   return (
//     <div className='mywork'>
//       <div className='mywork-title'>
//         <h1>My Latest Work</h1>
//       </div>

//       <div className='mywork-container'>
//         {works.map((work) => (
//           <div className='work-card' key={work.id}>
//             <img src={work.img} alt={work.title} />
//             <h2>{work.title}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Mywork


import React, { useState } from 'react';
import './Mywork.css';
import work1 from '../../assets/work1.jpg';
import work2 from '../../assets/work2.jpg';
import work3 from '../../assets/work3.jpg';


function Mywork() {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageClick = (img) => setPreviewImage(img);
  const closePreview = () => setPreviewImage(null);

  return (
    <div className='mywork' id='portfolio'>
      <div className='mywork-title'>
        <h1>My latest Work</h1>
      </div>

      <div className='mywork-container1'>


        <div className='mywork-container'>
        {[1,  ].map((_, index) => (
          <div
            className='work-card'
            key={index}
            onClick={() => handleImageClick(work1)}
          >
            <h2>BTC Website Design with Woldpress</h2>
            <img src={work1} alt='Project preview' />
          </div>
        ))}
      </div>

       <div className='mywork-container'>
        {[1,  ].map((_, index) => (
          <div
            className='work-card'
            key={index}
            onClick={() => handleImageClick(work2)}
          >
            <h2>UI/UX Design project Using Figma</h2>
            <img src={work2} alt='Project preview' />
          </div>
        ))}
      </div>

       <div className='mywork-container'>
        {[1,  ].map((_, index) => (
          <div
            className='work-card'
            key={index}
            onClick={() => handleImageClick(work3)}
          >
            <h2>Weather Application With React Native</h2>
            <img src={work3} alt='Project preview' />
          </div>
        ))}
      </div>

      </div>
      

      {previewImage && (
        <div className='image-preview active'>
          <button className='close-btn' onClick={closePreview}>✕</button>
          <img src={previewImage} alt='Full View' />
        </div>
      )}
    </div>
  );
}

export default Mywork;
