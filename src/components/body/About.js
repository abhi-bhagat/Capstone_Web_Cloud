import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStar, faAddressCard } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch,faStar,faAddressCard)

const About = () => (

  <div className="about-wrapper">

    <div className="about-heading">
      <h2>Welcome To The Website</h2>
      <div className="border" />
    </div>

    <div className="feature-container">

      <div className="search-section">
        <FontAwesomeIcon className="icon" icon="search" />
        <h3>Find What You Need</h3>
        <p>Searching right tradesman is so easy. Search as per distance and your budget!</p>
      </div>

      <div className="validate-section">
        <FontAwesomeIcon className="icon" icon="address-card" />
        <h3>Never Worry About License</h3>
        <p>We always make sure that you get the best service from licensed Tradesman!</p>
      </div>

      <div className="review-section">
        <FontAwesomeIcon className="icon" icon="star" />
        <h3>Check Ratings</h3>
        <p>Not sure about hiring a tradesman? Check their reviews and what other users are saying about particular Tradesman!</p>
      </div>

    </div>

  </div>

)

export default About
