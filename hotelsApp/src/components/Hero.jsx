import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../assets/hero_1.png';
import image2 from '../assets/hero_2.png';
import image3 from '../assets/hero_3.png';
import image4 from '../assets/hero_4.png';

import '../Hero.css';

export default function Hero() {
  useEffect(() => {
    // Preload images
    [image1, image2, image3, image4].forEach((image) => {
      new Image().src = image;
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust this value
  };

  return (
    <Slider {...settings}>
      <div>
        <img className="carousel--img" src={image1} alt="Image 1" />
      </div>
      <div>
        <img className="carousel--img"  src={image2} alt="Image 2" />
      </div>
      <div>
        <img className="carousel--img" src={image3} alt="Image 3" />
      </div>
      <div>
        <img className="carousel--img" src={image4} alt="Image 4" />
      </div>
    </Slider>
  );
}
