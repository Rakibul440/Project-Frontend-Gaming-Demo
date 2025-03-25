import React, { useState } from 'react';
import './css/testimonials.scss'; 
import freefire from "../assets/img/freefireTest.png";
import freefire2 from "../assets/img/freefiretest2.png"
import pubg from "../assets/img/pubgTest.png"
const Testimonials = () => {

  const images = [
    freefire,
    freefire2,
    freefire,
    pubg,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
      
      <button className="slider-btn prev-btn" onClick={goToPrevious}>
        &#10094; 
      </button>

      
      <div className="slide" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        
      </div>

      <button className="slider-btn next-btn" onClick={goToNext}>
        &#10095; 
      </button>
    </div>
  );
};

export default Testimonials;
