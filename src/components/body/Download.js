import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMobile, faDollarSign, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

// import { flexbox } from '@material-ui/system';

library.add(faMobile, faMapMarkerAlt, faDollarSign, faUsers, faEnvelope)

const Download = () => (
  <div className="download-component" id="download-id">


        <div className="download-app-content">
        <div className="download-app-content-heading">
            <h2 className="download-heading"> Download this <span className="awesome">awesome</span> app</h2>
        </div>
        <div className="download-app-content-subheading">
            <h2 className="download-subheading"> AVAILABLE ON BOTH iOS AND ANDROID</h2>
        </div>
        <div className="download-app-content-icons">
        <div className="iOS">



                <a href="#"><img className="test-img"
                    src={'images/ios2.png'}
                    alt="headerimage"
                />  </a>


        </div>
        <div className="android">


                <a href="#"><img className="test-img"
                    src={'images/android2.png'}
                    alt="headerimage"
                />  </a>
        </div>
        </div>


        </div>


  </div>
)

export default Download
