import Head from "next/head"
// import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Navigation from '../components/Nav';
import styles from './Index.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ClientSlide from '../components/ClientSlide';
import Footer from '../components/Footer'
import { useRouter } from 'next/router'

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons'
import Mantra from "./mantra";
import Slide from './slide'


// import your icons

library.add(fas);


export default function Home() {
  const router = useRouter()
  let { title, contents } = attributes;

  return <div>
     <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      
        <Navigation/>
       <Slide/>
        <section className={styles.section}>
       
       <div className="text-center">
<h3 className={styles.padding}> {title}
</h3>
       </div>
       <Container>
       <HomeContent />
       <Row>
       {contents.map((li, k) => (
         
    <Col xs={12} sm={6} md={4} key={k}>
                <article className={styles.thumb} >
                  <div>
                    <img layout="responsive"  src={li.what_we_do_images} alt='What we do image' width="60" height="60" alt="product development" /> 
                      <h1  className={styles.product_text}>{li.name}</h1>
                      <p  className={styles.h_125}> {li.description}</p>
                      </div>
                     
                      <Button variant="primary" size="sm"  className={styles.btn_sm}>
                  
                     <span>Read more &nbsp;&nbsp;&nbsp; </span>
                   
                      <FontAwesomeIcon className={styles.read_icon} icon={['fas', 'chevron-circle-right']} />
    </Button>  

                      </article>
    </Col>
    
  
      )
      )}
  </Row>
  
</Container>
     </section>

         
{/* why us */}
<section className={styles.light_gray_bg}>
  

  <Container>
  <h3 className={styles.padding}> WHY US </h3>
    
    <div className={styles.text_center}>
    <ul className={styles.main_list}>
     <li>
     <div className={styles.category}>
      <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'user-alt']} />
      <p className={styles.paragraph}> Customer Focus</p>
      </div>

     </li>
     <li>
     <div className={styles.category}>
      <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'trophy']} />
      <p className={styles.paragraph}> Passion for Success</p>
      </div>
     </li>
     <li>
     <div className={styles.category}>
      <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'laptop']} />
      <p className={styles.paragraph}> Technical Knowledge</p>
      </div>
     </li>
     <li>
     <div className={styles.category}>
      <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'book']} />
      <p className={styles.paragraph}>  Integrity & Accountability</p>
      </div>
     </li>
     <li>
     <div className={styles.category}>
      <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'frown']} />
      <p className={styles.paragraph}>   Excellence in Service </p>
      </div>
     </li>

   </ul>
    </div>
  <br></br><br></br>
 

  <Mantra/>
  </Container>
  
  <br/>
  <br/>
  
  </section>
     <ClientSlide/>


  <section className={styles.section}>
  <Container>
  <h3 className={styles.padding}> OUR TECHNOLOGIES
  
   </h3>
  <p className={styles.text_center}> WE TRUST IN LONG LASTING PARTNERSHIPS WITH THE MOST IMPORTANT BRANDS ON THE MARKET
  </p>
  
  <img src="/images/tech.png" className={styles.img_line} />
  </Container>
  </section>
  <br/><br/><br/>

  <Footer/>

  </div>
}