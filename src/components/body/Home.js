import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMobile, faDollarSign, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Download from '../body/Download'
import Team from '../body/Team'
import Feature from '../body/Features'
import Testimony from '../body/Testimony'
import Subscribe from '../body/Subscribe'
import Card from '@material-ui/core/Card';
import About from '../body/About'
import Contact from '../body/Contact'
import Pricing from '../body/Pricing'
// import SimpleMap from '../body/Map'



import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// import { flexbox } from '@material-ui/system';

library.add(faMobile, faMapMarkerAlt, faDollarSign, faUsers, faEnvelope)

const Home = () => (
  <div className="main">
        <div className="image-header" style ={ { backgroundImage: "url("+"images/headerimage1.jpg"+")" ,backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'} }>
<div className="title-header">
<div className="logo-title">
<p><img className="header-img"
                    src={'images/logo.png'}
                    alt="headerimage"/></p>


<h2>
  One stop <span className="solution">solution</span> to all your problems.
</h2>
</div>




</div>

        </div>

        <About />
<Download />
<Feature/>
<Testimony/>

< Team />
<Subscribe/>
<Pricing/>
<Contact />



  </div>
)

export default Home
