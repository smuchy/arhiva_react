import React, { useState } from "react";
import { RegisterUser } from "./../../API/registerUser";
import { LoginUser } from "./../../API/loginUser";
import {
  MDBBtn,
  MDBCol,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBInput,
  MDBIcon,
  MDBModalFooter,
  MDBNavLink,
  MDBNav,
  MDBNavItem,
  MDBTabPane,
  MDBTabContent,
} from "mdbreact";

const Login = ({ toggleLogin, setToggleLogin, admin, setAdmin }) => {
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [id, setId] = useState("");
  const [year, setYear] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const inputRegister = {
    first_name: first_name,
    last_name: last_name,
    id: id,
    year: year,
    birthday: birthday,
    email: email,
    password: password,
  };
  const inputLogin = {
    email: email,
    password: password,
  };

  const [activeTab, setActiveTab] = useState("1");

  return (
    <MDBModal
      isOpen={toggleLogin}
      toggle={() => setToggleLogin(!toggleLogin)}
      fullHeight
      position="left"
      className="login-container"
    >
      {/* <MDBModalHeader
        isOpen={toggleLogin}
        toggle={() => setToggleLogin(!toggleLogin)}
      ></MDBModalHeader> */}
      <MDBModalBody
        isOpen={toggleLogin}
        toggle={() => setToggleLogin(!toggleLogin)}
        className="login-body"
      >
        <MDBBtn
          onClick={() => setToggleLogin(!toggleLogin)}
          className="close-button"
        >
          <MDBIcon icon="times" className="close-icon" />
        </MDBBtn>
        <MDBNav className="nav-tabs mt-5">
          <MDBNavItem className="nav-item">
            <MDBNavLink
              link
              active={activeTab === "1"}
              onClick={() => setActiveTab("1")}
              role="tab"
            >
              Registracija
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="nav-item">
            <MDBNavLink
              link
              active={activeTab === "2"}
              onClick={() => setActiveTab("2")}
              role="tab"
            >
              Login
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem></MDBNavItem>
        </MDBNav>
        <MDBTabContent
          activeItem={activeTab}
          className="tab-content register-form"
        >
          <MDBTabPane tabId="1" role="tabpanel">
            <MDBInput
              label="Ime"
              type="text"
              value={first_name}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <MDBInput
              label="Prezime"
              type="text"
              value={last_name}
              onChange={(event) => setLastName(event.target.value)}
            />
            <MDBInput
              label="Broj indeksa"
              type="text"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
            <MDBInput
              label="Godina Studija"
              type="text"
              value={year}
              onChange={(event) => setYear(event.target.value)}
            />
            <MDBInput
              label="Datum Rodjenja"
              type="text"
              value={birthday}
              onChange={(event) => setBirthday(event.target.value)}
            />
            <MDBInput
              label="Email Adresa"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <MDBInput
              label="Lozinka"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <MDBInput
              label="Potvrdi Lozinku"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <MDBBtn
              color="elegant"
              onClick={() => {
                RegisterUser(inputRegister);
              }}
            >
              Registruj se
            </MDBBtn>
          </MDBTabPane>
          <MDBTabPane
            tabId="2"
            role="tabpanel"
            className="tab-content login-form"
          >
            <MDBInput
              label="Email"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <MDBInput
              label="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <MDBBtn
              color="elegant"
              onClick={() => LoginUser(inputLogin, setAdmin)}
            >
              Uloguj se
            </MDBBtn>
          </MDBTabPane>
        </MDBTabContent>
      </MDBModalBody>
      <MDBModalFooter>
        © Studentski inovacioni centar Elektronskog fakulteta, 2014
      </MDBModalFooter>
    </MDBModal>
  );
};

export default Login;
