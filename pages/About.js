import Navigation from '../components/Nav';
import styles from './Index.module.css'
import Head from "next/head"
import { Component } from 'react'
import { attributes, react as AboutContent } from '../content/about.md';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Footer from '../components/Footer';


export default class About extends Component {

    render(){
        let { title, sectionTitle, about_us } = attributes;
        return (
            <>
 <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Navigation/>
     
        <AboutContent/>
        <section className={styles.sub_bnr}>
        <h1> {title}</h1>
        </section>
        <br/>
        <section>
        <br/>
<h3 className={styles.padding}> 
{sectionTitle}
 </h3>
 <br/>
<Container>
<Row>
{about_us.map((about, k) => (


    <Col md={3} key={k} >
        <div className={styles.mission_box}>
        <div className={styles.mission_box_title}>
         {about.name}
 </div>
<div className={styles.mission_card_body}>
    <img height="96" width="96"  src={about.mission_image} alt='about image' />
</div>
<div className={styles.mission_content}>
    {about.description}
    </div>

        </div>
    </Col>
)
)}

</Row>
 </Container>
</section>

</>
    )
    }

  }
  
