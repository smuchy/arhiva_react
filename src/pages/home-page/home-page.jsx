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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./login";

const HomePage = () => {
  const [toggleLogin, setToggleLogin] = useState(false);
  return (
    <MDBContainer className="home-page-container">
      <MDBRow md="12" className="test">
        <MDBCol md="6" className="colLeft">
          <MDBView>
            <img
              src="https://i7.pngguru.com/preview/881/722/568/student-education-school-stock-photography-college-students-hd.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="blue-light">
              <div className="buttonDiv">
                <MDBBtn color="primary" className="button1">
                  <MDBIcon icon="magic" className="mr-1" /> Register
                </MDBBtn>
                <MDBBtn
                  color="default"
                  onClick={() => {
                    setToggleLogin(!toggleLogin);
                  }}
                >
                  Log in <MDBIcon icon="magic" className="ml-1" />
                </MDBBtn>
              </div>
            </MDBMask>
            {/* <Fragment> */}
            {/* </Fragment> */}
          </MDBView>
        </MDBCol>
        <MDBCol md="6" className="colRight">
          <MDBView>
            <img
              src="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="yellow-light">
              <Link to="/blanketi">
                <MDBBtn color="primary" className="button1">
                  <MDBIcon icon="magic" className="mr-1" /> Pogledaj Blankete
                </MDBBtn>
              </Link>
            </MDBMask>
          </MDBView>
        </MDBCol>
      </MDBRow>
      <Login toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} />
    </MDBContainer>
  );
};

export default HomePage;
