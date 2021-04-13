import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import styles from '../pages/Index.module.css';
import classNames from 'classnames';

export default function ContactForm() {

    return (
      
      <form name="contact" ata-netlify-recaptcha="true" method="POST" data-netlify="true" action="/success">
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
          <label className={styles.label_mtr} htmlFor="yourname">
             Name
          </label> <br />
          <input type="text" name="name" required className={styles.form_control} id="yourname" />
        </p>
        </Col>
        <Col md={4} sm={6} xs={12}>
             <p>
          <label htmlFor="yourcontact" className={styles.label_mtr}>
             Contact
          </label> <br />
          <input type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 10)} maxlength="10" name="contact" required  className={classNames({[styles.form_control]: true, [styles.input]: true})} id="yourcontact" />
        </p>
            </Col>
     
            <Col md={4} sm={6} xs={12}>
            <p>
          <label htmlFor="youremail" className={styles.label_mtr}>
             Email
          </label> <br />
          <input type="email" name="email" required className={styles.form_control} id="youremail" />
        </p>
            </Col>

            <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="yourcity" className={styles.label_mtr}>
             City
          </label> <br />
          <input type="text" name="city" required className={styles.form_control} id="yourcity" />
        </p>
            </Col>
          
            <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="yourstate" className={styles.label_mtr}>
             State
          </label> <br />
          <input type="text" name="state" required className={styles.form_control} id="yourstate" />
        </p>
            </Col>
            <Col md={4} sm={6} xs={12}>
            <p>
    <label required className={styles.label}>Relocation
      <select name="relocation[]" className={styles.select} >
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select></label>
  </p>
            </Col>

            <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="yourdesignation" className={styles.label_mtr}>
          Current  Designation
          </label> <br />
          <input type="text" name="designation"  className={styles.form_control} id="yourdesignation" />
        </p>
            </Col>
            <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="yourcompany" className={styles.label_mtr}>
          Current Company 
          </label> <br />
          <input type="text" name="company"  className={styles.form_control} id="yourcompany" />
        </p>
            </Col>

            <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="yourctc" className={styles.label_mtr}>
          Current CTC (LPA)
          </label> <br />
          <input type="text" name="ctc"  className={styles.form_control} id="yourctc" />
        </p>
            </Col>

            <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="yourlinkdin" className={styles.label}>
          LinkedIn Profile
          </label> <br />
          <input type="text" name="linkdin"  className={styles.form_control} id="yourlinkdin" />
        </p>
            </Col>

            <Col md={4} sm={6} xs={12}>
        <p>
          <label htmlFor="yourexperience" className={styles.label_mtr}>
          Total Experience  (Years)
          </label> <br />
          <input type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 2)}  name="experience" required className={styles.form_control} id="yourexperience" />
        </p>
            </Col>

           

        
            <Col md={8} sm={6} xs={12}>
        <p>
          <label htmlFor="youyourself" className={styles.label_mtr}>
          Tell us About Yourself
          </label> <br />
          <textarea type="text" placeholder="Give information about you for atleast 250 characters"  name="yourself" required className={styles.form_control} id="yourself" />
        </p>
            </Col>

            <Col md={4} sm={6} xs={12}>
            <p>
          <label htmlFor="myfile" className={styles.label_mtr}>
           Resume 
          </label> <br />
          <input type="file" accept=".doc/*,.pdf" required name="myfile" id="myfile" placeholder="upload file" />
          (<strong>Note: </strong> <small>Only Upload: Pdf, docs Format</small>) 
        </p>
            </Col>
            <Col md={12} sm={12} xs={12}>
            <div data-netlify-recaptcha="true"></div>
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