import React, { Component } from 'react';


// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'

import { fas } from '@fortawesome/free-solid-svg-icons'

// import your icons

library.add(fab);

function Social(){
    return(
        <div>
            <ul class="ct-socials">

  <li>
    <a href="https://www.linkedin.com/in/inovark/" target="_blank" className="linkedin">
    <FontAwesomeIcon icon={['fab', 'linkedin']} />
    </a>
  </li>
  <li>
    <a href="https://twitter.com/search?q=Inovark" target="_blank" className="twitter">
    <FontAwesomeIcon icon={['fab', 'twitter']} />
    </a>
  </li>
  <li>
    <a href="https://www.youtube.com/channel/UCzmBK6ec0Er4DFm0AVoe05A" target="_blank" className="tube">
    <FontAwesomeIcon icon={['fab', 'youtube']} />
    </a>
  </li>
</ul>
        </div>
    )
}

export default Social;