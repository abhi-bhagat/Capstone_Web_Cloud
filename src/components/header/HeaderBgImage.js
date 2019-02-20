import React from 'react'
import bgImage from '../images/bg-image.jpg'

const HeaderBgImage = () => (

  <div className="bgimage-wrapper">

    <div className="bgimage-container" style={{
        backgroundImage: `url(${bgImage})`,
        minHeight: '80vh',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat' }}
    >

      <div className="intro-section">
        <h1 className="into-heading">We are amazing Gorrilas</h1>
        <p className="intro-subhead">We listen to our clients. We never fail fulfilling their desires. We call ourselves Gorrilas for a reason as we roar like them and work with passion.</p>

        <div className="button-container">
          <button className="android-button">Android</button>
          <button className="ios-button">iOS</button>
        </div>

      </div>

    </div>

  </div>

)

export default HeaderBgImage
