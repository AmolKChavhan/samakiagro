import React, { useState, useEffect, useCallback } from "react";
import "./Carousel.css"; 

const Carousel = ({ images, autoplaySpeed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [autoplaySpeed, nextSlide]);

  return (
    <div className="carousel-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />
    </div>
  );
};

export default Carousel;
