import React, { Component, useState } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import BlanketiPage from "./pages/blanketi-page/blanketi-page";
import BlanketiLandingPage from "./pages/blanketi-landing-page/blanketi-landing-page";
import Header from "./header/header";
import Profile from "./pages/profile-page/profile";
import SubjectPage from "./pages/blanketi-page/subject-page/subject-page";

const App = () => {
  const [admin, setAdmin] = useState(localStorage.getItem("userAdmin"));
  return (
    <Router>
      <MDBContainer className="app-container">
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <>
                <Header admin={admin} setAdmin={setAdmin} home={true} />
                <HomePage admin={admin} setAdmin={setAdmin} />
              </>
            )}
          />
          <Route
            path="/blanketi"
            exact
            component={() => (
              <>
                <Header admin={admin} setAdmin={setAdmin} />
                <BlanketiLandingPage
                  admin={admin}
                  setAdmin={setAdmin}
                  home={false}
                />
              </>
            )}
          />
          <Route
            path="/blanketi-smer"
            exact
            component={() => (
              <>
                <Header admin={admin} setAdmin={setAdmin} />
                <BlanketiPage admin={admin} setAdmin={setAdmin} home={false} />
              </>
            )}
          />
          <Route
            path="/profile"
            exact
            component={() => (
              <>
                {" "}
                <Header admin={admin} setAdmin={setAdmin} />{" "}
                <Profile admin={admin} setAdmin={setAdmin} />
              </>
            )}
          />
          <Route
            path="/subject"
            exact
            component={() => (
              <>
                {" "}
                <Header admin={admin} setAdmin={setAdmin} />{" "}
                <SubjectPage admin={admin} setAdmin={setAdmin} />{" "}
              </>
            )}
          />
        </Switch>
      </MDBContainer>
    </Router>
  );
};

export default App;
