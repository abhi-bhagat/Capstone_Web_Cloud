import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck)

const Feature = () => (

  <div className="skin-1" style ={ { backgroundImage: "url("+"images/skin-1.jpg"+")" ,backgroundPosition: 'center',
      backgroundSize: '100% 610px',

      backgroundRepeat: 'no-repeat'} }>
  <div className="features-listed">
  <h3 className="features-title">Lorem ipsum dolor sit amet, consectetuer.</h3>
  <h4 className="features-subtitle">Lorem ipsum dolor sit amet</h4>
  <ul className="features-list">
  <li className="list_item"><FontAwesomeIcon className="icon check-icon" icon="check" />sed te dolorum fuisset signiferumque, vis laoreet voluptatum</li>
  <li className="list_item"><FontAwesomeIcon className="icon check-icon" icon="check" />sed te dolorum fuisset signiferumque, vis laoreet voluptatum</li>
  <li className="list_item"><FontAwesomeIcon className="icon check-icon" icon="check" />sed te dolorum fuisset signiferumque, vis laoreet voluptatum</li>

  </ul>

  </div>

  <div className="features-image">
  <div className="image-class">
  <img
    src={'images/features-image-bottom.png'}
        alt="headerimage"
    />

</div>
  </div>



  </div>

)

export default Feature
