import Head from "next/head"
import { Component } from 'react'
import { attributes, react as ManagementContent } from '../content/management.md';
import styles from './Index.module.css'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
export default class Management extends Component {
  render() {
    let { title, managements, management_image } = attributes;
    let base_asset_url = process.env.type == "dev" ?process.env.dev_asset : process.env.prod_asset;

    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      
   
        <section>
            <Container>
                <ManagementContent/>
                      
<h3 className={styles.inner_title}> 
{title}
 </h3>
 <Row>
 <Col md={9}> 
 {managements.map((list, k) => (
       <p key={k} >
    {list.description}
       </p>
)
)}
    
 </Col>
 <Col md={3}> 
 <img src={base_asset_url+management_image} className={styles.person}  />
 </Col>

     </Row>
            </Container>

</section>

      </>
    )
  }
}