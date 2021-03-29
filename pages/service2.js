import Head from "next/head"
import { Component } from 'react'
import { attributes, react as Service2Content } from '../content/service2.md';
import styles from './Index.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export default class Service extends Component {
  render() {
    let { services } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      
      <Service2Content/>

{services.map((list, k) => (
    <section key={k}>
<br/>
    <Container>
        <div className={styles.service_card}> 
<Row>
   
    <Col md={7}>
        <img src={list.service_image} className={styles.img}  />
    </Col>
    <Col md={5}>
        <div className={styles.service_title}>
      {list.service_title}
        </div>
        <p className={styles.service_content}>
        {list.description}
        </p>
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