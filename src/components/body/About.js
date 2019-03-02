import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStar, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
library.add(faSearch,faStar,faAddressCard)


const About = () => (

  <div className="about-wrapper">

    <div className="about-heading" data-aos="fade-up" data-aos-duration="2000">
      <h2>Welcome To <span className="fixin"> Fix In</span></h2>
      <div className="border" />
    </div>

    <div className="feature-container">

      <div className="search-section" data-aos="fade-up" data-aos-duration="3000">
        <FontAwesomeIcon className="icon" icon="search" />
        <h3>Find What You Need</h3>
        <p>Searching right tradesman is so easy. Search as per distance and your budget!</p>
      </div>

      <div className="validate-section" data-aos="fade-up" data-aos-duration="3000">
        <FontAwesomeIcon className="icon" icon="address-card" />
        <h3>Never Worry About License</h3>
        <p>We always make sure that you get the best service from licensed Tradesman!</p>
      </div>

      <div className="review-section" data-aos="fade-up" data-aos-duration="3000">
        <FontAwesomeIcon className="icon" icon="star" />
        <h3>Check Ratings</h3>
        <p>Not sure about hiring a tradesman? Check their reviews and what other users are saying about particular Tradesman!</p>
      </div>

    </div>

  </div>

)

export default About
