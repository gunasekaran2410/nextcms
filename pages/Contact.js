import Navigation from '../components/Nav';

import Head from "next/head";
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer';
import Address from './address'

library.add(fas);

function Contacts() {
    return <div>
          <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Navigation/>
       <Address/>
       
       <Footer/>
    </div>
  }
  
  export default Contacts