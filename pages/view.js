import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './Index.module.css'
import { attributes, react as ServiceContent } from '../content/service.md';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons'

import React, {  useState } from "react";

library.add(fas);

function View() {
  const [lgShow, setLgShow] = useState(false);
  let {  services } = attributes;
  let base_asset_url = process.env.type == "dev" ?process.env.dev_asset : process.env.prod_asset;

  return(
  <div>
       <Button onClick={() => setLgShow(true)} variant="primary" size="sm" className={styles.btn_sm}>
                      <span>Read more &nbsp;&nbsp;&nbsp; </span>
                      <FontAwesomeIcon className={styles.read_icon} icon={['fas', 'chevron-circle-right']} />
    </Button>

    {services.map((list, k) => (
      <Modal
      key={k} id={'setLgShow(true)}'+ k}
    size="lg"
    show={lgShow}
    onHide={() => setLgShow(false)}
    aria-labelledby="example-modal-sizes-title-lg"
  >
    <Modal.Header closeButton>
      <Modal.Title id="example-modal-sizes-title-lg">
      {list.service_title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      
    <ServiceContent/>
 <br/>


    <section  >
<br/>
    <Container >
        <div className={styles.service_card}> 
<Row>
    <Col md={5}>
        {/* <div  className={styles.service_title}>
      {list.service_title}
        </div> */}
        <p className={styles.service_content}>
        {list.description}
        </p>
    </Col>
    <Col md={7}>
        <img src={base_asset_url+list.service_image} className={styles.img} />
    </Col>
</Row>
        </div>
    </Container>
</section>
   


    </Modal.Body>
  </Modal>
  )
  )}
  </div>
  );
}

export default View;