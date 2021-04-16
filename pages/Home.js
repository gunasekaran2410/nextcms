
// import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import React, { useEffect, useState } from "react";
import styles from './Index.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import ClientSlide from '../components/ClientSlide';

import { useRouter } from 'next/router'

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons'
import Mantra from "./mantra";
import Slide from "./slide";
import Layout from './Layout';
// import your icons

library.add(fas);


export default function Home() {
  const [getData, setData] = useState({service_title:"",service_content:"",service_image:"",status:false});
  const router = useRouter()
  let { title, contents } = attributes;
  let base_asset_url = process.env.type == "dev" ?process.env.dev_asset : process.env.prod_asset;


  function modelOpen(li){
    console.log("modelOpen",li);
    setData({service_title:li.service_title,service_content:li.service_content, service_image:li.service_image, status:true});
    console.log(getData);
  }
  function hideModel(){
    setData({service_title:"",service_content:"", service_image:"",status:false});
  }

  return <div>
   
       
      <Layout>
         
       <Slide/>
     
     <section className={styles.section}>
    
    <div className="text-center">
<h3 className={styles.inner_title}> {title}
</h3>
    </div>
    <Container>
    <HomeContent />

    <Row>
    {contents.map((li, k) => (
      
 <Col xs={12} sm={6} md={4} key={k}>
         <article className={styles.thumb}>
               <div>
                 <img layout="responsive"  src={base_asset_url+li.what_we_do_images} alt='What we do image' width="60" height="60" alt="product development" /> 
                   <h1  className={styles.product_text}>{li.name}</h1>
                   <p  className={styles.h_125}> {li.description}</p>
                   </div>
                   {/* <a href={'/Services/#nav'+ k}>
                   <Button variant="primary" size="sm" className={styles.btn_sm}>
                   <span>Read more &nbsp;&nbsp;&nbsp; </span>
                   <FontAwesomeIcon className={styles.read_icon} icon={['fas', 'chevron-circle-right']} />
 </Button>
                     </a> */}

                     
<div className="hide_file">
<Container >
 <div className={styles.service_card}> 
<Row>
<Col md={5}>
 <div  className={styles.service_title}>
{li.service_title}
 </div>
 <p className={styles.service_content}>
 {li.service_content}
 </p>
</Col>
<Col md={7}>
 <img src={base_asset_url+li.service_image} className={styles.img} />
</Col>
</Row>
 </div>
</Container>
</div>


                      <Button onClick={() => modelOpen(li)} variant="primary" size="sm" className={styles.btn_sm}>
                      <span>Read more &nbsp;&nbsp;&nbsp; </span>
                      <FontAwesomeIcon className={styles.read_icon} icon={['fas', 'chevron-circle-right']} />
                        </Button>
                    
                   </article>   
 </Col>




 

   )
   )}


</Row>



<Modal
    centered  
    size="lg"
    show={getData.status}
    onHide={() => hideModel()}
    dialogClassName="modal-50w"
        aria-labelledby="example-custom-modal-styling-title"
  >
    <Modal.Header closeButton className="bg-primary">
      <Modal.Title id="example-modal-sizes-title-lg">
      {getData.service_title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      
 
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
        {getData.service_content}
        </p>
    </Col>
    <Col md={7}>
        <img src={base_asset_url+getData.service_image} className={styles.img} />
    </Col>
</Row>
        </div>
    </Container>
</section>
   


    </Modal.Body>
  </Modal>

</Container>

  </section>
 

{/* why us */}
<section className={styles.light_gray_bg}>


<Container>
<h3 className={styles.inner_title}> WHY US </h3>

<ul className={styles.main_list}>
  <li>
  <div className={styles.category}>
   <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'user-alt']} />
   <p className={styles.paragraph}> Customer Focus</p>
   </div>

  </li>
  <li>
  <div className={styles.category}>
   <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'trophy']} />
   <p className={styles.paragraph}> Passion for Success</p>
   </div>
  </li>
  <li>
  <div className={styles.category}>
   <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'laptop']} />
   <p className={styles.paragraph}> Technical Knowledge</p>
   </div>
  </li>
  <li>
  <div className={styles.category}>
   <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'book']} />
   <p className={styles.paragraph}>  Integrity & Accountability</p>
   </div>
  </li>
  <li>
  <div className={styles.category}>
   <FontAwesomeIcon className={styles.list_icon} icon={['fas', 'frown']} />
   <p className={styles.paragraph}>   Excellence in Service </p>
   </div>
  </li>

</ul>


 
 <div className={styles.text_center}>
   
   
 </div>
<br></br><br></br>


<Mantra/>
</Container>

<br/>
<br/>

</section>

  <ClientSlide/>


<section className={styles.section}>
<Container>
<h3 className={styles.inner_title}> OUR TECHNOLOGIES

</h3>
<p className={styles.text_center}> WE TRUST IN LONG LASTING PARTNERSHIPS WITH THE MOST IMPORTANT BRANDS ON THE MARKET
</p>

<img src="/images/tech.png" className={styles.img_line} />
</Container>
</section>
<br/><br/><br/>
      </Layout>


  </div>
}