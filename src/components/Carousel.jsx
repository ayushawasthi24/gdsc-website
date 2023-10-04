import React, { useState } from "react";  

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 transform"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-96 md:h-128 lg:h-160 relative">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-4 bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-full shadow-md">
        <button onClick={prevSlide} className="w-8 h-8 rounded-full">
          &#10094;
        </button>
      </div>
      <div className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-full shadow-md">
        <button onClick={nextSlide} className="w-8 h-8 rounded-full">
          &#10095;
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === currentSlide
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
