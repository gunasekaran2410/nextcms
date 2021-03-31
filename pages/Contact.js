import Navigation from '../components/Nav';
import styles from './Index.module.css'
import Slide from "../components/Slide";
import Head from "next/head";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer';


library.add(fas);

function Contacts() {
    return <div>
          <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Navigation/>
        <section className={styles.contact_bnr}>
            <Container>
                <br/>         <br/>         <br/>
                <div className={styles.bg_black}>
                <h1>our Office</h1>
                <h2>We trust in longlasting partnerships with the most important brands on the market</h2>
                </div>
                <br/>
                <Row>
                    <Col md={4}>
<article className={styles.contact_info}>
<h1>America</h1>
<div className={styles.tech}>
Inovark Technologies
</div>
<h2>Sunnyvale</h2>
<p>
1013 Reed Ave,<br/>
Sunnyvale,<br/>
California 94086,<br/>
USA
</p>
<div className={styles.mail}>
<ul >
    <li>
    <FontAwesomeIcon className={styles.mail_icon} icon={['fas', 'phone']} />
    </li>
        <li>
        &nbsp; +1 -408-689-2220
        </li>
</ul>
<ul >
    <li >
    <FontAwesomeIcon className={styles.envelope_icon} icon={['fas', 'envelope']} />
    </li>
        <li className={styles.envelope_icon}>
        &nbsp; <strong>info@inovark.com</strong>
        </li>
</ul>
</div>
</article>
                    </Col>
                    <Col md={8}>
                    <article className={styles.contact_info}>
<h1>INDIA</h1>
<Row>
    <Col md={6}>
        
<div className={styles.tech}>
Forent Technologies
</div>
<h2>CHENNAI</h2>
<p>
107, Casa grande urbano, venkatamanagalam -<br/>
Ponmar Road, venkatamanagalam, Chennai-600127<br/>


</p>
<div className={styles.mail}>
<ul >
    <li>
    <FontAwesomeIcon className={styles.mail_icon} icon={['fas', 'phone']} />
    </li>
        <li>
        &nbsp; +91 6382 470 434
        </li>
</ul>
<ul >
    <li >
    <FontAwesomeIcon className={styles.envelope_icon} icon={['fas', 'envelope']} />
    </li>
        <li className={styles.envelope_icon}>
        &nbsp; <strong> info-india@inovark.com</strong>
        </li>
</ul>
</div>
    </Col>
    <Col md={6}>
        
        <div className={styles.tech}>
        Forent Technologies
        </div>
        <h2>COIMBATORE</h2>
        <p>
        304, 3rd floor,<br/>
        KCR Business Today,<br/>
        7th Street Tatabad,<br/>
        Coimbatore-641012
        </p>
        <div className={styles.mail}>
        <ul >
            <li>
            <FontAwesomeIcon className={styles.mail_icon} icon={['fas', 'phone']} />
            </li>
                <li>
                &nbsp; +91 8489 395 333
                </li>
        </ul>
        <ul >
            <li >
            <FontAwesomeIcon className={styles.envelope_icon} icon={['fas', 'envelope']} />
            </li>
                <li className={styles.envelope_icon}>
                &nbsp; <strong> info-india@inovark.com</strong>
                </li>
        </ul>
        </div>
            </Col>
</Row>
</article>

</Col>
                </Row>
                <br/>         <br/>         <br/>
            </Container>
        </section>
       
       <Footer/>
    </div>
  }
  
  export default Contacts