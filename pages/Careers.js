import Navigation from '../components/Nav';

import Head from "next/head";


// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons'

import Footer from '../components/Footer'
import PostJob from './postJob'
import ContactForm from '../components/ContactForm'

// import your icons

library.add(fas);

function Careers() {
  // const [show, setShow] = useState(false);

  // const [lgShow, setLgShow] = useState(false);


    return <div>
         <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Navigation/>
      
     <PostJob/>
     <ContactForm />
      
<Footer/>

    </div>
  }
  
  export default Careers