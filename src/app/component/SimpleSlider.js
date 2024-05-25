import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div style={{ paddingTop: '70px' }}>
      <Slider {...sliderSettings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              width="300px"
              height="300px"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button onClick={goToPrev}>Previous</button>
        <button onClick={goToNext}>Next</button>
      </div>
    </div>
  );
};

export default SimpleSlider;