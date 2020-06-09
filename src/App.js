import React, { Component, useState } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import BlanketiPage from "./pages/blanketi-page/blanketi-page";
import BlanketiLandingPage from "./pages/blanketi-landing-page/blanketi-landing-page";
import Header from "./header/header";
import Profile from "./pages/profile-page/profile";

const App = () => {
  const [admin, setAdmin] = useState(localStorage.getItem("userAdmin"));
  return (
    <Router>
      <Header />
      <MDBContainer className="app-container">
        <Switch>
          <Route
            path="/"
            exact
            component={() => <HomePage admin={admin} setAdmin={setAdmin} />}
          />
          <Route
            path="/blanketi"
            exact
            component={() => (
              <BlanketiLandingPage admin={admin} setAdmin={setAdmin} />
            )}
          />
          <Route
            path="/blanketi-smer"
            exact
            component={() => <BlanketiPage admin={admin} setAdmin={setAdmin} />}
          />
          <Route
            path="/profile"
            exact
            component={() => <Profile admin={admin} setAdmin={setAdmin} />}
          />
        </Switch>
      </MDBContainer>
    </Router>
  );
};

export default App;
