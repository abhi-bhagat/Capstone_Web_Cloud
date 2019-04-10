import React from 'react'

import { stack as Menu } from 'react-burger-menu'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMobile, faDollarSign, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faMobile, faHome, faDollarSign, faUsers, faEnvelope)

const Menus = () => (
  <div className="primary-menu-container">

  <div className="ul-container">
    <ul className="primary-menu">

      <li className="list-item">
      <a href="#"><img className="test-img"
                    src={'images/logo.png'}
                    alt="headerimage"
                />  </a>


      </li>
      <li className="list-item about">
        <a href="#" className="about-a">About</a>
      </li>
      <li className="list-item">
        <a href="#">Features</a>
      </li>

      <li className="list-item">
        <a href="#">Pricing</a>
      </li>
      <li className="list-item">
        <a href="#">Team</a>
      </li>
      <li className="list-item">
        <a href="#">Contact</a>
      </li>
      <li className="list-item download">
        <a href="#download-id" class="custom">Download</a>
        

      </li>

    </ul>
  </div>

      <Menu right noOverlay className="menu-container">
        <a id="home" className="menu-item" href="#">
          <FontAwesomeIcon className="icon" icon="home" />
          Home
        </a>
        <a id="about" className="menu-item" href="#">
        <FontAwesomeIcon className="icon" icon="mobile" />
          About
        </a>
        <a id="about" className="menu-item" href="#">
        <FontAwesomeIcon className="icon" icon="mobile" />
          Features
        </a>

        <a id="about" className="menu-item" href="#">
          <FontAwesomeIcon className="icon" icon="dollar-sign" />
          Pricing
        </a>
        <a id="about" className="menu-item" href="#">
          <FontAwesomeIcon className="icon" icon="users" />
          Team
        </a>
        <a id="contact" className="menu-item" href="#">
          <FontAwesomeIcon className="icon" icon="envelope" />
          Contact
        </a>
        <a id="about" className="menu-item" href="#">
          <FontAwesomeIcon className="icon" icon="mobile" />
          Download
        </a>
      </Menu>

  </div>
)

export default Menus
