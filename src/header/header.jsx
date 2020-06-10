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

const Header = (props) => {
  return (
    <MDBContainer
      className={
        props.home ? "header-container homepage-header" : "header-container"
      }
    >
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

              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  // onClick={() => {
                  //   // setToggleLogin(!toggleLogin);
                  // }}
                >
                  Login
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/blanketi">Blanketi</MDBNavLink>
              </MDBNavItem>
              {localStorage.getItem("userAdmin") !== null && (
                <MDBNavItem>
                  <MDBNavLink>Dodaj blanket</MDBNavLink>
                </MDBNavItem>
              )}
              {props.admin && (
                <MDBNavItem>
                  <MDBNavLink to="/blanketi">Profil</MDBNavLink>
                </MDBNavItem>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    </MDBContainer>
  );
};

export default Header;
