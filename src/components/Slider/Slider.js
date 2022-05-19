import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img2 from '../../images/slider-02.jpeg'
import img1 from '../../images/sl03.jpg'
import img3 from '../../images/sl01.jpg'

const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="slider-img d-block w-100 "
          src={img1} height='650px'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider-img d-block w-100 "
          src={img2} height='650px'
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider-img d-block w-100"
          src={img3} height='650px'
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
};


export default Slider;