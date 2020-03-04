import React from 'react';
import { render } from 'react-dom';
import './carousel.scss';
import { Carousel } from 'react-responsive-carousel';
import Gods from '../../img/carousel/Moellerup_Gods_1_1950x700.jpg';
import Gods2 from '../../img/carousel/Moellerup_Gods_4_1950x700.jpg';
import Gods3 from '../../img/carousel/Moellerup_Gods_8_1950x700.jpg';
const Slider = () => {
  return (
    <Carousel>
      <div>
        <img src={Gods} alt="Gods"/>
      </div>
      <div>
        <img src={Gods2} alt="Gods"/>
      </div>
      <div>
        <img src={Gods3} alt="Gods"/>
      </div>
    </Carousel>
  )
}


export default Slider;
