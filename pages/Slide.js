import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
// import Image from 'next/image'
import styles from '../pages/Index.module.css';
import { attributes, react as SlideContent } from '../content/slide.md';
function Slide(){
  let { slides } = attributes;
  return(
      <div>
       <SlideContent/>
<Carousel fade className={styles.slide}>
{slides.map((slide, k) => (
  <Carousel.Item key={k}>
  <img width="1920" height="538" src={slide.slide1_image} alt='Mantra image' />
  </Carousel.Item>
))}
</Carousel>

          
      </div>
  )
}

export default Slide
