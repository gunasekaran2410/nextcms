
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';


import { fas } from '@fortawesome/free-solid-svg-icons'

import PostJob from './postJob'
import Layout from './Layout';

// import your icons

library.add(fas);

function Careers() {
  // const [show, setShow] = useState(false);

  // const [lgShow, setLgShow] = useState(false);


    return <div>
      <Layout>
        
      
     <PostJob/>
    
      </Layout>
      


    </div>
  }
  
  export default Careers