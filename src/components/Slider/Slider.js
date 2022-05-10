import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'

const Slider = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={img1} height='650px'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={img2} height='650px'
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3} height='650px'
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    );
};


export default Slider;