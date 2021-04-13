import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Image from 'next/image';
import styles from '../pages/Index.module.css';
import Link from 'next/link'



// import './css/style.css';


function Navigation(){
    return(
        <div>
    <Navbar collapseOnSelect bg="light" fixed="top" expand="lg" className={styles.shadow}>
            <div className="container">
  <Navbar.Brand href="/Home" className="nav_left">  
  
    <img src="/images/logo.png" width="238" height="80" alt="Logo"/>

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className={styles.left_side}>
    <Nav className="mr-auto">
      <Nav.Link href="/Home" className={styles.nav_link}>Home</Nav.Link>
      <Nav.Link href="/About" className={styles.nav_link}>About Us</Nav.Link>
      <Nav.Link href="/Products" className={styles.nav_link}>Products</Nav.Link>
      <Nav.Link href="/Careers" className={styles.nav_link} >Careers</Nav.Link>
      <Nav.Link href="/Contact" className={styles.nav_link}>Contact Us</Nav.Link>
      {/* <Nav.Link href="/Services" className={styles.nav_link} >Services</Nav.Link> */}
      {/* <NavDropdown  title="Services"  className={styles.nav_link} id="basic_nav_dropdown">
        <NavDropdown.Item  className={styles.dropdown_nav_li} href="/Services/#nav0">Product Development</NavDropdown.Item>
        <NavDropdown.Item className={styles.dropdown_nav_li} href="/Services/#nav1">Mobile App Development</NavDropdown.Item>
        <NavDropdown.Item className={styles.dropdown_nav_li} href="/Services/#nav2">Cloud Computing</NavDropdown.Item>
        <NavDropdown.Item className={styles.dropdown_nav_li} href="/Services/#nav3">Quality Assurance</NavDropdown.Item>
        <NavDropdown.Item className={styles.dropdown_nav_li} href="/Services/#nav4">Development Operations</NavDropdown.Item>
        <NavDropdown.Item className={styles.dropdown_nav_li} href="/Services/#nav5">Research & Development</NavDropdown.Item>
      </NavDropdown> */}
  

    </Nav>

  </Navbar.Collapse>
  </div>
</Navbar>

            
        </div>
    )
}

export default Navigation