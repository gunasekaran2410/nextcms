import Head from "next/head"
import { Component } from 'react'
import { attributes, react as ServiceContent } from '../content/service.md';
import styles from './Index.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export default class Service extends Component {
  render() {
    let { title, services, services1 } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      
        <section className={styles.product_bnr}>
            
        <h1> {title}</h1>
        </section>
        <br/>
        <ServiceContent/>
        <section>
     

 <br/>

{services.map((list, k) => (
    <section key={k}>
<br/>
    <Container>
        <div className={styles.service_card}> 
<Row>
    <Col md={5}>
        <div className={styles.service_title}>
      {list.service_title}
        </div>
        <p className={styles.service_content}>
        {list.content}
        </p>
    </Col>
    <Col md={7}>
        <img src={list.service_image} />
    </Col>
</Row>
        </div>
    </Container>
</section>
   
)
)}


</section>


{services1.map((list, k) => (
    <section key={k}>
<br/>
    <Container>
        <div className={styles.service_card}> 
<Row>
    <Col md={5}>
        <div className={styles.service_title}>
      {list.service_title}
        </div>
        <p className={styles.service_content}>
        {list.content}
        </p>
    </Col>
    <Col md={7}>
        <img src={list.product_image}  />
    </Col>
</Row>
        </div>
    </Container>
</section>
   
)
)}

      </>
    )
  }
}