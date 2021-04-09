import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
// import Image from 'next/image'
import styles from '../pages/Index.module.css';
import { attributes, react as SlideContent } from '../content/slide.md';
function Slide(){
  let { slides} = attributes;
  return(
      <div>
       
<Carousel fade className={styles.slide}>
{slides.map((list, k) => (
  <Carousel.Item key={k}>
    <img src={list.slide_image}    />
    <Carousel.Caption>
          <h3>{list.title} </h3>
          <p>{list.sub_title}</p>
        </Carousel.Caption>
  </Carousel.Item>
  )
  )}
  
  
  {/* <Carousel.Item>
  <img src="/images/slides/world.jpg"    />
  <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
 
  </Carousel.Item> */}
  
</Carousel>

          
      </div>
  )
}

export default Slide
