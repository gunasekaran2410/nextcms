import Navigation from '../components/Nav';
import Head from "next/head";
import Footer from '../components/Footer';
import Pro from './pro';  
function Products() {
    return <div>
         <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Navigation/>
      
     
     <Pro/>
     
        <br/>
        <Footer/>
    </div>
  }
  
  export default Products