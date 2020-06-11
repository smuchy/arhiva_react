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
import Login from "../pages/home-page/login";
import AddSheetPopUpModal from "./add-sheet/add-sheet";

const Header = (props) => {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleAddSheet, setToggleAddSheet] = useState(false);
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
                {props.admin === null ? (
                  <MDBNavLink
                    to="#"
                    onClick={() => {
                      setToggleLogin(!toggleLogin);
                    }}
                  >
                    Login
                  </MDBNavLink>
                ) : (
                  <></>
                )}
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/blanketi">Blanketi</MDBNavLink>
              </MDBNavItem>
              {localStorage.getItem("userAdmin") !== null && (
                <MDBNavItem onClick={() => setToggleAddSheet(!toggleAddSheet)}>
                  <MDBNavLink to="#">Dodaj blanket</MDBNavLink>
                </MDBNavItem>
              )}
              {props.admin && props.admin !== null ? (
                <MDBNavItem>
                  <MDBNavLink to="/profile">Profil</MDBNavLink>
                </MDBNavItem>
              ) : (
                <></>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
      <Login
        toggleLogin={toggleLogin}
        setToggleLogin={setToggleLogin}
        admin={props.admin}
        setAdmin={props.setAdmin}
      />
      <AddSheetPopUpModal
        toggleAddSheet={toggleAddSheet}
        setToggleAddSheet={setToggleAddSheet}
      />
    </MDBContainer>
  );
};

export default Header;
