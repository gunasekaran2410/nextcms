import Navigation from '../components/Nav';
import Head from "next/head";
import Footer from '../components/Footer';
import Mission from './mission';
import Management from './management';

function About() {
   
    return <div>
          <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Navigation/>
      
      <Mission/>
      
<br/><br/>
<section>
   
   <Management/>

</section>
<br/><br/>
<Footer/>
    </div>
  }
  
  export default About