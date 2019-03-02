import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const FormPage = () => {
  return (


    <div className="contact-container">

    <div className="team-heading">
    <h2 className="team-heading"> Get in touch <span className="amazing">with us</span></h2>

    </div>
    <MDBContainer className="mdbcontainer">
      <MDBRow>
        <MDBCol md="12">
          <form>
          <div className="form-container">
            <div className="form-left">
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Subject
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />

            </div>



            <div className="form-right">
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Your message
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control text-area"
              rows="3"
            />
            <div className="text-center mt-4">
              <MDBBtn color="success send-button" outline type="submit">
                Send
                
              </MDBBtn>
            </div>

            </div>

            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default FormPage;
