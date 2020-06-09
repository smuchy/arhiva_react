import React, { Fragment, useState } from "react";
import {
  MDBContainer,
  MDBView,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import Login from "./login";

const HomePage = (props) => {
  const [toggleLogin, setToggleLogin] = useState(false);
  return (
    <MDBContainer className="home-page-container">
      <MDBRow md="12" className="homepage-row">
        <MDBCol md="6" className="left-column">
          <div className="overlay-container left-image">
            <div className="diamond"></div>
            <h1 className="overlay-text">
              Join our <br /> <label>community</label>
            </h1>
            <div className="buttonDiv">
              <MDBBtn
                color="warning"
                onClick={() => {
                  setToggleLogin(!toggleLogin);
                }}
              >
                Login <MDBIcon className="ml-1" />
              </MDBBtn>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="6" className="right-column">
          <div className="overlay-container right-image">
            <div className="diamond"></div>
            <h1 className="overlay-text">
              View our <br /> <label>database</label>
            </h1>
            <div className="buttonDiv">
              <MDBBtn color="info" className="button1" href="/blanketi">
                <MDBIcon className="mr-1" /> Blanketi
              </MDBBtn>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
      <Login
        toggleLogin={toggleLogin}
        setToggleLogin={setToggleLogin}
        admin={props.admin}
        setAdmin={props.setAdmin}
      />
    </MDBContainer>
  );
};

export default HomePage;
