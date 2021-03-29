import Head from "next/head"
import { Component } from 'react'
import { attributes, react as ServiceContent } from '../content/service.md';
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
      

{services.map((listed, k) => (
    <section key={k}>
<br/>
    <Container>
        <div className={styles.service_card}> 
<Row>
   
    <Col md={7}>
        <img src={listed.service_image}  />
    </Col>
    <Col md={5}>
        <div className={styles.service_title}>
      {listed.service_title}
        </div>
        <p className={styles.service_content}>
        {listed.description}
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