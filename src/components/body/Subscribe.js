import React from 'react'
import Button from 'react-bootstrap/Button';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope)

// import { Button } from 'react-bootstrap';
const Subscribe = () => (
  <div className="Subscribe-container">
  <h1 className="subscribe-heading">
  <span className="subscribe-color">Subscribe to </span><span className="awesome">our newsletter</span>
  </h1>

  <form class="subscribe-form">
<div className="subscribe-division">
<FontAwesomeIcon icon="envelope" className="envelope" />
    <input type="text" className="subscribe" name="name" placeholder="enter your email" />

</div>

  <Button variant="success" className="subscribe-button">Subscribe</Button>
</form>

  </div>


)
export default Subscribe
