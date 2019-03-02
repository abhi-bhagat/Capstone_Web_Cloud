import React from 'react'

const Feature = () => (

  <div className="skin-1" style={ { backgroundImage: `url(require("images/skin-1.jpg"))` } }>
  <div className="features-listed">
  <h3 className="features-title">Lorem ipsum dolor sit amet, consectetuer.</h3>
  <h4 className="features-subtitle">Lorem ipsum dolor sit amet</h4>
  <ul className="features-list">
  <li className="list_item">sed te dolorum fuisset signiferumque, vis laoreet voluptatum</li>
  <li className="list_item">sed te dolorum fuisset signiferumque, vis laoreet voluptatum</li>
  <li className="list_item">sed te dolorum fuisset signiferumque, vis laoreet voluptatum</li>

  </ul>

  </div>

  <div className="features-image">
  <div className="image-class">
  <img
    src={'images/features-image.jpg'}
        alt="headerimage"
    />

</div>
  </div>



  </div>

)

export default Feature
