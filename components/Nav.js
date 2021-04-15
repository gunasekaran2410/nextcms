import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Image from 'next/image';
import styles from '../pages/Index.module.css';
import Link from 'next/link'
import {useRouter} from 'next/router'
import DropdownButton from 'react-bootstrap/DropdownButton'

import Dropdown from 'react-bootstrap/Dropdown'



// import './css/style.css';


const Navigation = () =>{

const router = useRouter()
function isActive(route)
{
  if(route== router.pathname ){
    return "select"
  }
  else ""
}

    return(
        <div className="nav-wrapper #1565c0 blue dark-3">
 <Container>
   <Row className="rows">
     <Col md="4" xs="6" sm="6" className="text-center">
     <Link href="/">
     <a className="brand-logo left">
     <img src="/images/logo.png" className="logo" alt="Logo"/>
     </a>
   </Link>
     </Col>
     <Col md="8"  xs="6" sm="6" className="text-center">
  <div className="web-view">
  <ul id="nav-mobile" >
<li className={ isActive('/Home')} >
<Link href="/Home">
<a> Home</a>
</Link>
</li>
<li className={ isActive('/About')} >
  <Link href="/About">
    <a >
About
    </a>
  </Link>
</li>
<li className={ isActive('/Products')} >
  <Link href="/Products">
    <a >
Products
    </a>
  </Link>
</li>
<li className={ isActive('/Careers')} >
  <Link href="/Careers">
    <a >
    Careers
    </a>
  </Link>
</li>
<li className={ isActive('/Contact')} >
  <Link href="/Contact">
    <a >
Contact Us
    </a>
  </Link>
</li>
   </ul>
  </div>
     </Col>
   </Row>
 </Container>

 <DropdownButton id="dropdown-basic-button" className="mobile-view" title="Menu">
  <Dropdown.Item href="/Home">Home</Dropdown.Item>
  <Dropdown.Item href="/About">About</Dropdown.Item>
  <Dropdown.Item href="/Products">Products</Dropdown.Item>
  <Dropdown.Item href="/Careers">Careers</Dropdown.Item>
  <Dropdown.Item href="/Contact">Contact US</Dropdown.Item>
</DropdownButton>
            
        </div>
    )
}

export default Navigation