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
    {/* <Image src="/images/slides/market share.jpg" layout="responsive" width="1920" height="538"  /> */}
 
  </Carousel.Item>
  <Carousel.Item>
  {/* <Image src="/images/slides/world.jpg" layout="responsive" width="1920" height="538"  /> */}

 
  </Carousel.Item>
  
</Carousel>

          
      </div>
  )
}

export default Slide
