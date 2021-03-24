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
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
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
         
    <Col xs={12} sm={6} md={4} key={k}>
                <article className={styles.thumb}>
                  <div >
                    {/* <Image layout="responsive" src="/images/what_we/product_development.png" width="200" height="200" alt="product development" />  */}
                      <h1  className={styles.product_text}>{li.name}</h1>
                      <p  className={styles.h_125}> {li.description}</p>
                      </div>
                      <Button variant="primary" size="sm" className={styles.btn_sm}>
                      <span>Read more &nbsp;&nbsp;&nbsp; </span>
                      <FontAwesomeIcon className={styles.read_icon} icon={['fas', 'chevron-circle-right']} />
    </Button>

                     
                      </article>
    </Col>
    
  
      ))}
  </Row>
  
</Container>
     </section>

         
{/* why us */}
<section className={styles.light_gray_bg}>
  

  <Container>
  <h3 className={styles.padding}> WHY US </h3>
    
    <div className={styles.text_center}>
    <ListGroup horizontal style={{ background: 'transparent'}}>
  
    <ListGroup.Item>
      <div className={styles.category}>
      <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'user-alt']} />
      <p className={styles.paragraph}> Customer Focus</p>
      </div>
    </ListGroup.Item>
  
    <ListGroup.Item>
      <div className={styles.category}>
      <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'trophy']} />
      <p className={styles.paragraph}> Passion for Success</p>
      </div>
    </ListGroup.Item>
  
  
    <ListGroup.Item>
      <div className={styles.category}>
      <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'laptop']} />
      <p className={styles.paragraph}> Technical Knowledge</p>
      </div>
    </ListGroup.Item>
  
    <ListGroup.Item>
      <div className={styles.category}>
      <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'book']} />
      <p className={styles.paragraph}>  Integrity & Accountability</p>
      </div>
    </ListGroup.Item>
  
    <ListGroup.Item>
      <div className={styles.category}>
      <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'frown']} />
      <p className={styles.paragraph}>   Excellence in Service </p>
      </div>
    </ListGroup.Item>
  
  
  </ListGroup>
    </div>
  <br></br><br></br>
    <h3 className={styles.padding}> OUR MANTRA </h3>
  <Row>
  <Card className={styles.margin_10}>
    <Card.Body className={styles.padding_10}>
    <Table className={styles.table}>
    <tbody>
      <tr>
        <td className={styles.border_none}>
          {/* <Image width="60" height="60" src="/images/innovate.svg"/> */}
        </td>
        <td className={styles.border_none}>
          <h4>INNOVATE</h4>
          <p className={styles.paragraph}>
          Innovation is the ability to see change as an opportunity that unlocks new value. There is a way to do it better – we are finding it.s
          </p>
        </td>
      </tr>
    </tbody>
  </Table>
    </Card.Body>
  </Card>
  
  <Card className={styles.margin_10}>
    <Card.Body className={styles.padding_10}>
    <Table className={styles.table}>
    <tbody>
      <tr>
        <td className={styles.border_none}>
          {/* <Image width="80" height="80" src="/images/implementation.svg"/> */}
        </td>
        <td className={styles.border_none}>
          <h4>IMPLEMENT</h4>
          <p className={styles.paragraph}>
          An Innovation idea needs the right implementation to find success. It is not just the action, but right action determines the product fate. We focus on the right way of building the product with the right technology.
          </p>
        </td>
      </tr>
    </tbody>
  </Table>
    </Card.Body>
  </Card>
  
  <Card className={styles.margin_10}>
    <Card.Body className={styles.padding_none}>
    <Table className={styles.table}>
    <tbody>
      <tr>
        <td className={styles.border_none}>
          {/* <Image width="120" height="120" src="/images/iteration.svg"/> */}
        </td>
        <td className={styles.border_none}>
          <h4>ITERATE</h4>
          <p className={styles.paragraph}>
          Change is the only thing that is constant. A product that does not iterate has an expiry date tagged to it as soon as it comes out. Through an iterative process, we can keep the original focus, validating for current situations, helping us keep the ideas fresh and products competitive.
          </p>
        </td>
      </tr>
    </tbody>
  </Table>
    </Card.Body>
  </Card>
  </Row>
  
  </Container>
  
  <br/>
  <br/>
  
  </section>
     


  </div>
}