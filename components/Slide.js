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
    {/* <img
      className="d-block w-100"
      src="http://www.inovark.com/assets/images/slides/market%20share.jpg"
      alt="First slide"
    /> */}
    <img src="/images/slides/market share.jpg"  width="1920" height="538"  />
 
  </Carousel.Item>
  <Carousel.Item>
  <img src="/images/slides/world.jpg"  width="1920" height="538"  />

 
  </Carousel.Item>
  
</Carousel>

          
      </div>
  )
}

export default Slide
