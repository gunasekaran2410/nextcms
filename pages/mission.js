import Head from "next/head"
import { Component } from 'react'
import { attributes, react as MissionContent } from '../content/mission.md';
import styles from './Index.module.css'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
export default class Mission extends Component {
  render() {
    let { title, missions, sectionTitle } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      
        <section className={styles.sub_bnr}>
            <MissionContent/>
        <h1 className={styles.sec_content}> {title}</h1>
        </section>
        <br/>
        <section>
        <br/>
<h3 className={styles.inner_title}> 
{sectionTitle}
 </h3>
 <br/>
<Container>
<Row>
{missions.map((list, k) => (

    <Col md={3} key={k} >
        <div className={styles.mission_box}>
        <div className={styles.mission_box_title}>
         {list.name}
 </div>
<div className={styles.mission_card_body}>
    <img height="96" width="96"  src={list.mission_image} alt='about image' />
</div>
<div className={styles.mission_content}>
    {list.description}
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