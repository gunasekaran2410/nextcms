import Head from "next/head"
import { Component } from 'react'
import { attributes, react as MantraContent } from '../content/mantra.md';
import styles from './Index.module.css'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
// import Image from 'next/image'

export default class Mantra extends Component {
  render() {
    let { title, mantras } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      

        <h3 className={styles.padding}> {title} </h3>
  <Row>
  <MantraContent />

  {mantras.map((mantra, k) => (

<Card key={k} className={styles.margin_10}>
<Card.Body className={styles.padding_10}>
<Table className={styles.table}>
<tbody>
  <tr>
    <td className={styles.border_none}>
      {/* <Image width="60" height="60" src="/images/innovate.svg"/> */}
      <img width="60" height="60"  src={attributes.hero_image} alt='hero image' />
    </td>
    <td className={styles.border_none}>
      <h4>{mantra.name}</h4>
      <p className={styles.paragraph}>
      {mantra.description}
      </p>
    </td>
  </tr>
</tbody>
</Table>
</Card.Body>
</Card>
))}

  </Row>

      </>
    )
  }
}