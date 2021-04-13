import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Image from 'next/image';
import styles from '../pages/Index.module.css';
// import './css/style.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'

import ImageView from './Imageview';
 

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'

const style = {
  
    col: {
        paddingLeft: 0,
        paddingRight: 0
    }
};
// import your icons

library.add(fas);





function Footer(){
    return(
        <div>

         
            
       <section className={styles.footer}>
       <Container>
          <Row>
    <Col md={3} sm={6} sm={12}>
    <div className={styles.text_center}>
<a href="/Home">
<img src="/images/inovark tech.png" width="238" height="80" />
</a>
    </div>
    <div className={styles.text_center}>
        <div className={styles.gray_color}>   <FontAwesomeIcon icon={['fas', 'envelope']} />   info@inovark.com</div>
        </div>
    </Col>
    <Col md={3} sm={6} sm={12}>
    <div className={styles.foot_title1}>Quick Links</div>
     <ul className={styles.list}>
         <li className={styles.foot_list}>
       
        <Link href="/About">
        <a>
        <FontAwesomeIcon className={styles.size} icon={['fas', 'chevron-right']} /> About Us
        </a>
            </Link>
         </li>
         <li className={styles.foot_list}>
           
           <Link href="/Products">
           <a>
             <FontAwesomeIcon className={styles.size} icon={['fas', 'chevron-right']} /> Products
             </a></Link>
        
         </li>
         <li className={styles.foot_list}>
      <Link href="/Services">
      <a >
        <FontAwesomeIcon className={styles.size} icon={['fas', 'chevron-right']} /> Services
        </a>
      </Link>
         </li>
         <li className={styles.foot_list}>
    <Link href="/Careers">
    <a >
         <FontAwesomeIcon className={styles.size} icon={['fas', 'chevron-right']} /> Careers
         </a>
    </Link>
         </li>
         <li className={styles.foot_list}>
         <Link href="/Contact">
         <a >
         <FontAwesomeIcon className={styles.size} icon={['fas', 'chevron-right']} /> Contact Us
         </a>
         </Link>
         </li>
         
     </ul>
 
    </Col>
    <Col md={3} sm={6} sm={12}>
    <div className={styles.foot_title}>PHOTO STREAM </div>
    <ImageView/>
    </Col>
    <Col md={3} sm={6} sm={12}>
    <div className={styles.foot_title1}>SOCIAL SHARE </div>
    <ul className={styles.social}>
        <li>
            <a href="https://www.linkedin.com/in/inovark/" target="_blank"> 
            <img src="/images/social/linkedin.png" />
            </a>
          
        </li>
        <li>
        <a href="https://twitter.com/search?q=Inovark" target="_blank"> 
        <img src="/images/social/twitter.png" />
        </a>
       
        </li>
        <li>
       <a href="https://www.youtube.com/channel/UCzmBK6ec0Er4DFm0AVoe05A" target="_blank"> 
       <img src="/images/social/youtube.png" />
       </a>
        </li>
    </ul>
    </Col>
  </Row>
          </Container>
           
            
       </section>
        </div>
    )
}

export default Footer