import Navigation from '../components/Nav';

import Head from "next/head";
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer';
import Address from './address'
import Layout from './Layout';

library.add(fas);

function Contacts() {
    return <div>
       <Layout>
       <Address/>
       </Layout>
    </div>
  }
  
  export default Contacts