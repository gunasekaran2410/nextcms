import Head from "next/head"
import { Component } from 'react'
import { attributes, react as ServiceContent } from '../content/service.md';
import styles from './Index.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export default class Service extends Component {
  render() {
    let { title, services } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      
        <section className={styles.services_bnr}>
            
        <h1  className={styles.sec_content}> {title}</h1>
        </section>
        <br/>
       
        <section>
     
        <ServiceContent/>
 <br/>

{services.map((list, k) => (
    <section key={k} id={'nav'+ k} >
<br/>
    <Container >
        <div className={styles.service_card}> 
<Row>
    <Col md={5}>
        <div  className={styles.service_title}>
      {list.service_title}
        </div>
        <p className={styles.service_content}>
        {list.description}
        </p>
    </Col>
    <Col md={7}>
        <img src={list.service_image} className={styles.img} />
    </Col>
</Row>
        </div>
    </Container>
</section>
   
)
)}



</section>


      </>
    )
  }
}