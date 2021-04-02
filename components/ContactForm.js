import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import styles from '../pages/Index.module.css';
import classNames from 'classnames';

export default function ContactForm() {
    return (
      <form name="contact" method="POST" data-netlify="true" action="/success">
        <input type="hidden" name="form-name" value="contact" />
        <Container>
        <Card>
  <Card.Header className={styles.card_header}>
  Apply Job
  </Card.Header>
  <Card.Body>
  
    <Row>
        <Col md={4} sm={6} xs={12}>
        <p>
          <label className={styles.label} htmlFor="yourname">
             Name:
          </label> <br />
          <input type="text" name="name" required className={styles.form_control} id="yourname" />
        </p>
        </Col>
        <Col md={4} sm={6} xs={12}>
             <p>
          <label htmlFor="yourcontact" className={styles.label}>
             Contact:
          </label> <br />
          <input type="number" pattern="\d*"  name="contact" required  className={classNames({[styles.form_control]: true, [styles.input]: true})} id="yourcontact" />
        </p>
            </Col>
     
            <Col md={4} sm={6} xs={12}>
            <p>
          <label htmlFor="youremail" className={styles.label}>
             Email:
          </label> <br />
          <input type="email" name="email" required className={styles.form_control} id="youremail" />
        </p>
            </Col>

            <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="yourcity" className={styles.label}>
             City:
          </label> <br />
          <input type="text" name="city" required className={styles.form_control} id="yourcity" />
        </p>
            </Col>
          
            <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="yourstate" className={styles.label}>
             State:
          </label> <br />
          <input type="text" name="state" required className={styles.form_control} id="yourstate" />
        </p>
            </Col>

            <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="yourdesignation" className={styles.label}>
             Previous Designation:
          </label> <br />
          <input type="text" name="designation"  className={styles.form_control} id="yourdesignation" />
        </p>
            </Col>

            <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="youyourself" className={styles.label}>
          Say about yourself:
          </label> <br />
          <input type="text" name="yourself" className={styles.form_control} id="youryourself" />
        </p>
            </Col>

            <Col md={4} sm={6} xs={12}>
            <p>
          <label htmlFor="myfile" className={styles.label}>
           Resume :
          </label> <br />
          <input type="file" required name="myfile" id="myfile" placeholder="upload file" />
        </p>
            </Col>
            <Col md={12} sm={12} xs={12}>
            <div className={styles.text_right}>
   
            <Button type="submit" variant="success" size="md">Submit</Button>{' '}
            </div>
            </Col>
    </Row>

  </Card.Body>
</Card>
<br/>
</Container>
      </form>
    )
  }