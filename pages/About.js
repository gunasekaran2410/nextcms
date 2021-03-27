import Navigation from '../components/Nav';
import styles from './Index.module.css'
import Head from "next/head";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from '../components/Footer';
import { attributes, react as AboutContent } from '../content/about.md';


function About() {
    let { title, sectionTitle,  aboutUs } = attributes;
    return <div>
          <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Navigation/>
     
        <section className={styles.sub_bnr}>
        <h1> {title}</h1>
        </section>

{/* mission & vision  */}
<div>
          <AboutContent/>
          <br/>
<h3 className={styles.padding}> 
    {sectionTitle}
 </h3>
 <br/>
         
<section>
<Container>
<Row>
{aboutUs.map((aboutList, k) => (

    <Col md={3} key={k} >
        <div className={styles.mission_box}>
        <div className={styles.mission_box_title}>
         {aboutList.name}
 </div>
<div className={styles.mission_card_body}>
    <img height="96" width="96"  src={aboutList.mission_image} alt='about image' />
</div>
<div className={styles.mission_content}>
    {aboutList.description}
    </div>

        </div>
    </Col>
)
)}

</Row>
 </Container>
</section>



      </div>

<section>





</section>
<br/><br/>

<br/><br/>
<Footer/>
    </div>
  }
  
  export default About