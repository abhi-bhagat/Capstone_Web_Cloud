
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
const Pricing = () => (
<div className="Pricing-container">
<h1 className="pricing-heading">
Our awesome <span className="awesome">price plans</span>
</h1>




<div className="container pricing-container">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>For Service Seekers</li>
                <li>Chat feature</li>
                <li>Access to all the available options</li>
               

               
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-outline-success">Sign up for free</button>
            </div>
          </div>
          {/* <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-success">Get started</button>
            </div>
          </div> */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
              <li>For Service Providers</li>
                <li>Chat feature</li>
                <li>Get Booking through applications</li>

              </ul>
              <button type="button" className="btn btn-lg btn-block btn-success">Contact us</button>
            </div>
          </div>
        </div>
      </div>




</div>
)
export default Pricing
