import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMobile, faDollarSign, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Download from '../body/Download'
import Team from '../body/Team'
import Feature from '../body/Features'
import Testimony from '../body/Testimony'

import Card from '@material-ui/core/Card';
import About from '../body/About'
import Contact from '../body/Contact'



import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// import { flexbox } from '@material-ui/system';

library.add(faMobile, faMapMarkerAlt, faDollarSign, faUsers, faEnvelope)

const Home = () => (
  <div className="main">
        <div className="image-header">

            <img className="img-header"
                src={'images/headerimage3.jpg'}
                alt="headerimage"
            />
        </div>

        <About />
<Download />
<Feature/>
<Testimony/>

< Team />

<Contact />


  </div>
)

export default Home
