import Navigation from '../components/Nav';
import Service2 from './service2'
import Head from "next/head";
import Service from "./service";
import Footer from '../components/Footer';

function Services() {
    return <div>
           <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Navigation/>

      <Service/>
         
<Service2/>
<br/>

<Footer/>

    </div>
  }
  
  export default Services