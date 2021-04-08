import Head from "next/head"
import { Component } from 'react'
import { attributes, react as AddressContent } from '../content/address.md';
import styles from './Index.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);


export default class Address extends Component {
    render() {
      let { title, sub_title, address } = attributes;
      return (
        <>
          <Head>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          </Head>
        
          <section className={styles.contact_bnr}>
            <Container>
                <br/>         <br/>         <br/>
                <div className={styles.bg_black}>
                <h1>{title}</h1>
                <h2>{sub_title}</h2>
                </div>
                <br/>
                <Row>
                {address.map((list, k) => (

                    <Col md={4} key={k}>
<article className={styles.contact_info}>
<h1>{list.country_name}</h1>
<div className={styles.tech}>   
{list.company_name}
</div>
<h2>{list.company_state}</h2>
<p>
{list.company_address1}<br/>
{list.company_address2}<br/>
</p>
<div className={styles.mail}>
<ul >
    <li>
    <FontAwesomeIcon className={styles.mail_icon} icon={['fas', 'phone']} />
    </li>
        <li>
        &nbsp; {list.contact_number}
        </li>
</ul>
<ul >
    <li >
    <FontAwesomeIcon className={styles.envelope_icon} icon={['fas', 'envelope']} />
    </li>
        <li className={styles.envelope_icon}>
        &nbsp; <strong>
            {list.contact_mail}
        </strong>
        </li>
</ul>
</div>
</article>
                    </Col>
                )
                    )}
                  
                </Row>
                <br/>         <br/>         <br/>
            </Container>

     
        </section>
       
  
        </>
      )
    }
  }