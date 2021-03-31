import Card from 'react-bootstrap/Card'
import styles from './Index.module.css'
export default function Success() {
    return <div className={styles.text_center}>
        <Card>
            <Card.Body>
             <div className={styles.text_center}>
             <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
  <circle className={styles.checkmark__circle} cx="26" cy="26" r="25" fill="none"/>
  <path className={styles.checkmark__check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
</svg>
             </div>
            <h1 className={styles.was}>Your Application was successfully submitted!</h1>
            </Card.Body>
        </Card>
    </div>
  }