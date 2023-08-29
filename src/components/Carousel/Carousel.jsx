import React, { useRef } from 'react';
import { Carousel } from 'antd';
import mma1 from '../../images/mma1.jpg';
import mma2 from '../../images/mma2.jpg';
import mma3 from '../../images/mma3.jpg';
import mma4 from '../../images/mma4.jpg';
import mma5 from '../../images/mma5.jpg';
import mma6 from '../../images/mma6.jpg';

const MMACarousel = () => {
  const images = [
    mma1,
    mma2,
    mma3,
    mma4,
    mma5,
    mma6,
  ];

  const carouselRef = useRef();

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  return (
    <div className='carousel'>
      <Carousel ref={carouselRef} autoplay autoplaySpeed={3000} style={{ height: '500px' }}>
        {images.map((image, index) => (
          <div className='image' key={index}>
            <img
              src={image}
              alt={`MMA Image ${index}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
        ))}
      </Carousel>
      <div className='buttons'>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default MMACarousel;
