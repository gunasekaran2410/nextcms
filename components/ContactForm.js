import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from '../pages/Index.module.css';
export default function ContactForm() {
    return (
      <form name="contact" method="POST" data-netlify="true" action="/success">
        <input type="hidden" name="form-name" value="contact" />
<Container>
    <Row>
        <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="yourname">
             Name:
          </label> <br />
          <input type="text" name="name" id="yourname" />
        </p>
        </Col>
        <Col md={4} sm={6} xs={12}>
             <p>
          <label htmlFor="yourcontact">
             Contact:
          </label> <br />
          <input type="text" name="contact" id="yourcontact" />
        </p>
            </Col>
     
            <Col md={4} sm={6} xs={12}>
            <p>
          <label htmlFor="youremail">
             Email:
          </label> <br />
          <input type="email" name="email" id="youremail" />
        </p>
            </Col>

            <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="yourcity">
             Contact:
          </label> <br />
          <input type="text" name="city" id="yourcity" />
        </p>
            </Col>
          
            <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="yourstate">
             State:
          </label> <br />
          <input type="text" name="state" id="yourstate" />
        </p>
            </Col>

            <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="yourdesignation">
             Previous Designation:
          </label> <br />
          <input type="text" name="designation" id="yourdesignation" />
        </p>
            </Col>

            <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="youyourself">
             Previous Designation:
          </label> <br />
          <input type="text" name="yourself" id="youryourself" />
        </p>
            </Col>

            <Col md={4} sm={6} xs={12}>
            <p>
          <label htmlFor="myfile">
           Resume :
          </label> <br />
          <input type="file" name="myfile" id="myfile" placeholder="upload file" />
        </p>
            </Col>
            <Col md={12} sm={12} xs={12}>
            <div className={styles.text_center}>
            <button type="submit">Send</button>
            </div>
            </Col>
    </Row>
</Container>
    
      </form>
    )
  }