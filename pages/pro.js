import Head from "next/head"
import { Component } from 'react'
import { attributes, react as ProContent } from '../content/pro.md';
import styles from './Index.module.css'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default class Mission extends Component {
  render() {
    let { title, pros, pros1,  } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      
        <section className={styles.product_bnr}>
            <ProContent/>
        <h1> {title}</h1>
        </section>
        <br/>
        <section>
     

 <br/>
<Container>
<Row>
{pros.map((list, k) => (
 <Container key={k}>
 <div className={styles.text_center}>
<img src={list.logo_image} width="300" height="100" />
    </div>
    <p className={styles.product_content}>
      {list.description}
         </p>
         <div className={styles.text_center}>
<img src={list.product_image} width="910" height="553" />
    </div>
    <div className={styles.margin}></div>
 </Container>
   
)
)}


{pros1.map((list1, k) => (
 <Container key={k}>
 <div className={styles.text_center}>
<img src={list1.logo_image1} width="300" height="100" />
    </div>
    <p className={styles.product_content}>
      {list1.description}
         </p>
         <div className={styles.text_center}>
<img src={list1.product_image1} width="910" height="553" />
    </div>
 </Container>
   
)
)}

</Row>
 </Container>
</section>

      </>
    )
  }
}