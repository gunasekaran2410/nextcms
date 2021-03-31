import Card from 'react-bootstrap/Card'
import styles from './Index.module.css'
export default function Success() {
    return <div className={styles.text_center}>
        <Card>
            <Card.Body>
                <img src="/images/ok.gif" alt=""/>
            <h1>Your Application was successfully submitted!</h1>
            </Card.Body>
        </Card>
    </div>
  }