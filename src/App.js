import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";

class App extends Component {
  render() {
    return (
      <Router>
        <MDBContainer className="app-container">
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </MDBContainer>
      </Router>
    );
  }
}

export default App;
