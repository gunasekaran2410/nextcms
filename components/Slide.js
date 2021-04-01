import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
// import Image from 'next/image'
import styles from '../pages/Index.module.css';

function Slide(){
  return(
      <div>
       
<Carousel fade className={styles.slide}>
  <Carousel.Item>
    <img src="/images/slides/market share.jpg"    />
 
  </Carousel.Item>
  <Carousel.Item>
  <img src="/images/slides/world.jpg"    />

 
  </Carousel.Item>
  
</Carousel>

          
      </div>
  )
}

export default Slide
