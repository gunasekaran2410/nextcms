import React, {
    Component
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
// import Image from 'next/image'
import styles from '../pages/Index.module.css';
import {
    attributes,
    react as SlideContent
} from '../content/slide.md';

function Slide() {
    let {
        slides
    } = attributes;
    let base_asset_url = process.env.type == "dev" ? process.env.dev_asset : process.env.prod_asset;


    return ( <
        div >
        <
        SlideContent / >
        <
        Carousel fade className = {
            styles.slide
        }
        indicators = {
            false
        } > {
            slides.map((list, k) => ( <
                Carousel.Item key = {
                    k
                } >
                <
                img src = {
                    base_asset_url + list.slide_image
                }
                /> <
                Carousel.Caption className = {
                    styles.carousel_caption
                } >
                <
                div className = "slide_title" > {
                    list.title
                } < /div> <
                div className = "slide_sub_title" > {
                    list.sub_title
                } < /div> < /
                Carousel.Caption > <
                /Carousel.Item>
            ))
        }


        {
            /* <Carousel.Item>
              <img src="/images/slides/world.jpg"    />
              <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
             
              </Carousel.Item> */
        }

        <
        /Carousel>  <
        div className = "color-lines" >
        <
        img src = "../images/borders design.jpg" / >
        <
        /div>

        <
        /div>
    )
}

export default Slide