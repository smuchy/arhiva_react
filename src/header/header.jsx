import React, { useState, useEffect } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBIcon,
} from "mdbreact";

const Header = () => {
  return (
    <MDBContainer className="header-container">
      <header>
        <MDBNavbar
          color="black"
          fixed="top"
          dark
          expand="md"
          scrolling
          transparent
        >
          <MDBNavbarBrand href="/">
            <img src="http://arhiva-blanketa.dacha204.com/templates/images/sicef-logo.png" />
          </MDBNavbarBrand>
          {<MDBNavbarToggler />}
          <MDBCollapse navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              {/* {props.token === null && ( */}
              <MDBNavItem>
                <MDBNavLink to="register">Register</MDBNavLink>
              </MDBNavItem>
              {/* // )} */}
              <MDBNavItem>
                {/* {props.token ? ( */}
                {/* <MDBNavLink
                  to="#"
                  onClick={() => {
                    // LogoutUser(props.token, props.setToken);
                  }}
                >
                  Logout
                </MDBNavLink> */}
                {/* ) : ( */}
                <MDBNavLink
                  to="#"
                  // onClick={() => {
                  //   // setToggleLogin(!toggleLogin);
                  // }}
                >
                  Login
                </MDBNavLink>
                {/* )} */}
              </MDBNavItem>
              {/* {props.token && ( */}
              <MDBNavItem>
                <MDBNavLink to="/profile">Profile</MDBNavLink>
              </MDBNavItem>
              {/* )} */}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    </MDBContainer>
  );
};

export default Header;
