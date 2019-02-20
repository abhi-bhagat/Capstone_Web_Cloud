import React , { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faMobile, faAngleLeft,faAngleRight,faDollarSign, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

  // import { flexbox } from '@material-ui/system';

  library.add(faMobile, faAngleRight,faMapMarkerAlt, faDollarSign, faUsers, faEnvelope, faAngleLeft)

  const Team = () => (
    <div className="team-component" id="team-id">
    <StyleRoot>
    <div className="team-heading">
    <h2 className="team-heading"> Meet our <span className="amazing">amazing</span> team</h2>

    </div>
      <Coverflow
        displayQuantityOfSide={2}
        navigation
        infiniteScroll
        enableHeading
        media={{
          '@media (max-width: 900px)': {
            width: '100%',
            height: '300px'
          },
          '@media (min-width: 900px)': {
            width: '100%',
            height: '500px'
          }
        }}
      >
        <img src='images/test.png' alt=<h3>Abhishek Bhagat</h3>developer data-action="https://facebook.github.io/react/"/>
        <img src='images/test.png' alt='Album two' data-action="http://passer.cc"/>
        <img src='images/test.png' alt='Album three' data-action="https://doce.cc/"/>
        <img src='images/test.png' alt='Album four' data-action="http://tw.yahoo.com"/>
          <img src='images/test.png' alt='Album four' data-action="http://tw.yahoo.com"/>
            <img src='images/test.png' alt='Album four' data-action="http://tw.yahoo.com"/>
      </Coverflow>
    </StyleRoot>



    </div>
  )









  export default Team
