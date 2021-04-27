


// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons'
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