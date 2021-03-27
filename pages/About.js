import Navigation from '../components/Nav';
import styles from './Index.module.css'
import Head from "next/head";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from '../components/Footer';
import Mission from './mission';

function About() {
   
    return <div>
          <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Navigation/>
      
      <Mission/>
      
<br/><br/>
<section>
   
   <Container>
       
<h3 className={styles.padding}> MANAGEMENT (OUR FOUNDATION)
 </h3>
       <Row>
           <Col md={9}> 
            
 <p>
 The foundation stone of Inovark Technologies has been laid by our dynamic leader Manikandan Meenakshi Sundaram.
 </p>
 <p>
 With 22+ years of experience in the Technology industry, Mani possesses veteran skills to astutely discover the manifold opportunities to achieve the business objectives & maintain quality.
 </p>
 <p>
 He has worn multiple hats across his journey of work including Entrepreneur, Sales, Business Development, application development, Consultant, Data Architect. He has immense experience in developing wide variety of business applications using Microsoft .NET technologies, Java, Azure, AWS, IOT, ETL etc.
 </p>
 <p>
 His Specialties include building Cloud based solutions and large data management and migration. He has plenty of experience in building solutions for File Sync & Share,
 </p>
 <p>
 Radiology PACS, HIS, IHE Workflow, US Financial and Stock Markets
 </p>
 <p>
 Application Expertise: Cloud Applications, Scalable, High Traffic solutions, Large Data Management, Web, N-Tier Apps, SaaS, Cloud, ETL, APIs, Database Management and Dev Ops
 </p>
           </Col>
           <Col md={3}>
               <img src="/images/manikandan.jpg" className={styles.person} width="440" height="587" layout="responsive" />
           </Col>
       </Row>
   </Container>

</section>
<br/><br/>
<Footer/>
    </div>
  }
  
  export default About