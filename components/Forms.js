import React, {useState } from "react";
import Button from 'react-bootstrap/Button'
import styles from '../pages/Index.module.css'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

function Forms() {
    const [lgShow, setLgShow] = useState(false);
  
    return (
      <>
    
        <Button onClick={() => setLgShow(true)}>
          Apply
        </Button>
      
       
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header className={styles.bg_primary}  closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          <FontAwesomeIcon className={styles.modal_icon} icon={['fas', 'graduation-cap']} />  Job Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Job Description </h5>
          <ul className={styles.job_list}>
            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </li>
            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </li>
            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </li>
            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </li>
            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </li>
            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </li>
          </ul>

          <br/><br/>


          <form name="contact" method="POST" data-netlify="true">
         

  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

          {/* <Form name="contact" method="POST" data-netlify="true">
 <Row>
   <Col md={6} xs={12}>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" id="name" placeholder="Enter your Name" required />
    
  </Form.Group>
   </Col>
   <Col md={6} xs={12}>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Contact Number</Form.Label>
    <Form.Control type="number" id="number" placeholder="Enter your Number" required />
  </Form.Group>
   </Col>

   <Col md={6} xs={12}>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" id="email" placeholder="Enter your Email" required />
  </Form.Group>
   </Col>

   <Col md={6} xs={12}>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>City/State</Form.Label>
    <Form.Control type="text" placeholder="Enter your City/State" required />
  </Form.Group>
   </Col>

   <Col md={6} xs={12}>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Previous Designation</Form.Label>
    <Form.Control type="text" placeholder="Enter your Previous Designation" required />
  </Form.Group>
   </Col>

   <Col md={6} xs={12}>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Resume Upload <small>(format:<i> PDF, document</i>)</small></Form.Label>
    <Form.Control type="file" required />
  </Form.Group>
   </Col>

   
   <Col md={12} xs={12}>
   <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Say about yourself</Form.Label>
    <Form.Control as="textarea" id="message" rows={3} placeholder="Enter Say about yourself" />
  </Form.Group>
   </Col>

   <Col md={12} xs={12}>
   <div className={styles.text_center}>
   <Button variant="outline-dark" closeButton>Cancel</Button> &nbsp;
   <Button type="submit" variant="success">Apply</Button>{' '}
   </div>
   </Col>
   

 </Row>
  </Form> */}

        </Modal.Body>
      </Modal>
      </>
    );
  }
  
export default Forms