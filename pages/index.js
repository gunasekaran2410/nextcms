import Head from "next/head"
// import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Navigation from '../components/Nav';
import styles from './Index.module.css'
import Slide from "../components/Slide";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Image from 'next/image'
import Button from 'react-bootstrap/Button'
// import ListGroup from 'react-bootstrap/ListGroup'
// import Card from 'react-bootstrap/Card'
// import Table from 'react-bootstrap/Table'
// import ClientSlide from '../components/ClientSlide';
// import Footer from '../components/Footer'
import { useRouter } from 'next/router'

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons'

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
<h3 className={styles.padding}  >{title}
</h3>
       </div>
       <Container>
       <HomeContent />
       <Row>
       {contents.map((li, k) => (
         
    <Col xs={6} md={4} key={k}>
                <article className={styles.thumb}>
                  <div className="button colio-link">
                    {/* <Image layout="responsive" src="/images/what_we/product_development.png" width="200" height="200" alt="product development" />  */}
                      <h1  className="color-text">{li.name}</h1>
                      <p  className="color-text h-125"> {li.description}</p>
                      </div>
                      <Button variant="primary" size="sm">
                      Read more &nbsp;&nbsp;&nbsp; 
                     
                      <FontAwesomeIcon icon={['fas', 'chevron-circle-right']} />
    </Button>

                     
                      </article>
    </Col>
    
  
      ))}
  </Row>
  
</Container>
     </section>
     


  </div>
}