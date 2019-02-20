import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMobile, faDollarSign, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Download from '../body/Download'
import Team from '../body/Team'

import Card from '@material-ui/core/Card';

// import { flexbox } from '@material-ui/system';

library.add(faMobile, faMapMarkerAlt, faDollarSign, faUsers, faEnvelope)

const Home = () => (
  <div className="main">
        <div className="image-header">

            <img className="img-header"
                src={'images/headerimage2.jpg'}
                alt="headerimage"
            />
        </div>
<Download />

< Team />

  </div>
)

export default Home
