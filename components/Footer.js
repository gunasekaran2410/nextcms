import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Image from 'next/image';
import styles from '../pages/Index.module.css';
// import './css/style.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
    <Col>
    <div className={styles.text_center}>
<img src="/images/inovark tech.png" width="238" height="80" />
    </div>
    <div className={styles.text_center}>
        <div className={styles.gray_color}>   <FontAwesomeIcon icon={['fas', 'envelope']} />   info@inovark.com</div>
        </div>
    </Col>
    <Col>
    <div className={styles.foot_title1}>Quick Links</div>
     <ul className={styles.list}>
         <li className={styles.foot_list}>
         <FontAwesomeIcon className={styles.size} icon={['fas', 'chevron-right']} /> About Us
         </li>
         <li className={styles.foot_list}>
         <FontAwesomeIcon className={styles.size} icon={['fas', 'chevron-right']} /> Products
         </li>
         <li className={styles.foot_list}>
         <FontAwesomeIcon className={styles.size} icon={['fas', 'chevron-right']} /> Services
         </li>
         <li className={styles.foot_list}>
         <FontAwesomeIcon className={styles.size} icon={['fas', 'chevron-right']} /> Contact Us
         </li>
        
     </ul>
 
    </Col>
    <Col>
    <div className={styles.foot_title}>PHOTO STREAM </div>
  <Row>
      <Col md={4} className={style.col}>
      <div className={styles.text_center}>
             <img className={styles.round} src="/images/footer/1.jpg" width="80" height="80" />
      </div>
      </Col>
      <Col md={4} className={style.col}>
      <div className={styles.text_center}>
             <img className={styles.round} src="/images/footer/2.jpg" width="80" height="80" />
      </div>
      </Col>
      <Col md={4} className={style.col}>
      <div className={styles.text_center}>
             <img className={styles.round} src="/images/footer/3.jpg" width="80" height="80" />
      </div>
      </Col>
      <Col md={4} className={style.col}>
      <div className={styles.text_center}>
             <img className={styles.round1} src="/images/footer/4.jpg" width="80" height="80" />
      </div>
      </Col>
  </Row>
    </Col>
    <Col>
    <div className={styles.foot_title}>SOCIAL SHARE </div>
    <ul className={styles.social}>
        <li>
           <img src="/images/social/twitter.svg" width="17" height="17"/>
        </li>
        <li>
        <img src="/images/social/twitter.svg" width="17" height="17"/>
        </li>
        <li>
        <img src="/images/social/twitter.svg" width="17" height="17"/>
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