import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import styles from '../pages/Index.module.css';
class ClientSlide extends Component {
  state = {
    items: [
      {id: 1, img: '/images/client/world health.png', href: 'https://www.who.int/', alt: 'world health organizations'},
      {id: 2, img: '/images/client/vertex.png', href: 'https://www.sessiontogether.com/', alt: 'censof'},
      {id: 3, img: '/images/client/session.png', href: 'https://www.sessiontogether.com/', alt: 'better together'},
      {id: 4, img: '/images/client/iteratively.png', href: 'https://www.sessiontogether.com/', alt: 'iteratively'},
      {id: 5, img: '/images/client/offtheq.png', href: 'https://www.offtheq.com/', alt: 'offtheq'},
      {id: 6, img: '/images/client/sws.png', href: 'https://play.google.com/store/apps/details?id=com.sws.user', alt: 'sws'},
      {id: 7, img: '/images/client/myeui.png', href: 'https://www.myeui.org/', alt: 'myeui'},
      {id: 8, img: '/images/client/syncplicity.png', href: 'http://www.syncplicity.com', alt: 'syncplicity'},
      {id: 9, img: '/images/client/uniads.png', href: 'http://www.uniqads.in/', alt: 'We Brand it'},
      {id: 10, img: '/images/client/vayup.png', href: 'https://www.vayup.com/', alt: 'VayUp -  Build , Manage & Grow your Independent hotel brand !'},
      {id: 11, img: '/images/client/ryzgo.png', href: 'https://ryzgo.com/', alt: 'ebook'},

    ]
  }

  render () {
    const { items } = this.state;
    return (
     <section className={styles.counter}>
       <br/>
         <h1 className={styles.padding_top} >Our Amazing Clients </h1>
           <span className={styles.text_white}>We trust in long lasting partnerships with the most important brands on the
             market</span>
             <br/>       <br/>     
             <br/>        <br/>     
        <Carousel  className={styles.web_view} itemsToScroll={5} itemsToShow={5} enableAutoPlay autoPlaySpeed={5000} itemPadding={[0, 10]} itemsToShow={6} outerSpacing={100}>
        {items.map(item => <div className={styles.slide_ver} key={item.id}>
          <a href={item.href} target="_blank"><img
     src={item.img} 
    alt={item.alt}/></a>
        </div>)}
      </Carousel>

      <div className={styles.mobile_view}>
      <ul className={styles.client_inside}>

      <li className={styles.list_inline_item}>
  <a href="https://www.sessiontogether.com/" target="_blank">
    <img
     src="/images/client/world health.png" width="160"
    alt="world health organizations"/></a>
	</li>

  <li className={styles.list_inline_item}>
  <a href="https://www.sessiontogether.com/" target="_blank">
    <img
     src="/images/client/censof.png" width="160"
    alt="censof"/></a>
	</li>

  <li className={styles.list_inline_item}>
  <a href="https://www.sessiontogether.com/" target="_blank">
    <img
     src="/images/client/session.png" width="160"
    alt="session"/></a>
	</li>

  <li className={styles.list_inline_item}>
  <a href="https://www.sessiontogether.com/" target="_blank">
    <img
     src="/images/client/iteratively.png" width="160"
    alt="iteratively"/></a>
	</li>

  <li className={styles.list_inline_item}>
  <a href="https://www.sessiontogether.com/" target="_blank">
    <img
     src="/images/client/offtheq.png" width="160"
    alt="offtheq"/></a>
	</li>




  <li className={styles.list_inline_item}>
  <a href="https://www.myeui.org/" target="_blank">
    <img
     src="/images/client/myeui.png" width="160"
    alt="myEUI - EUIs - Promoting energy literacy through transparency and crowdsourcing"/></a>
	</li>

  <li className={styles.list_inline_item}>
  <a href="https://www.syncplicity.com/" target="_blank">
    <img
     src="/images/client/syncplicity.png" width="160"
    alt="Axway – Data integration, Content Collaboration, Hybrid Integration Platform"/></a>
	</li>

  <li className={styles.list_inline_item}>
  <a href="http://www.uniqads.in/" target="_blank">
    <img
     src="/images/client/uniads.png" width="160"
    alt="We Brand it"/></a>
	</li>

  <li className={styles.list_inline_item}>
  <a href="http://www.uniqads.in/" target="_blank">
    <img
     src="/images/client/uniads.png" width="160"
    alt="We Brand it"/></a>
	</li>

  <li className={styles.list_inline_item}>
  <a href="http://www.vayup.com/" target="_blank">
    <img
     src="/images/client/vayup.png" width="160"
    alt="VayUp -  Build , Manage & Grow your Independent hotel brand !"/></a>
	</li>


  <li className={styles.list_inline_item}>
  <a href="http://www.ryzgo.com/" target="_blank">
    <img
     src="/images/client/ryzgo.png" width="160"
    alt="ryzgo"/></a>
	</li>

       </ul>
       </div>

     </section>
     
 


    )
  }
}

export default ClientSlide;