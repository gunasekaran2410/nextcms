import Head from "next/head"
import { Component } from 'react'
import { attributes, react as PostJobContent } from '../content/postJob.md';
import styles from './Index.module.css'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons'

import Forms from '../components/Forms'
// import your icons



library.add(fas);
export default class Mission extends Component {
    
  render() {
    let { title, jobs } = attributes;

    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      
        <section className={styles.careers_bnr}>
            <PostJobContent/>
        <h1  className={styles.sec_content}> {title}</h1>
        </section>
        <br/>
        <section>

<Container>
<h3 className={styles.padding}> Join Our Team </h3>
<Row>
{jobs.map((list, k) => (

    <Col md={4} key={k} >
        <div className={styles.job_box}>
             <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'briefcase']} />
             <h4>
                 {list.job_title}
             </h4>
             <p className={styles.job_content}>
                 {list.job_description}
             </p>
{/* <Forms/> */}
             {/* <Button variant="outline-primary" onClick={() => setLgShow(true)}>Apply</Button>{' '} */}
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