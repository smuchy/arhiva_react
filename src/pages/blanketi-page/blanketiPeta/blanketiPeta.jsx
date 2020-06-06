import React, { Fragment } from "react";
import Collapsible from "react-collapsible";
import {
  MDBFooter,
  MDBContainer,
  MDBView,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBLink,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdbreact";

const BlanketiPeta = () => {
  return (
    <>
      <MDBContainer>
        <MDBBreadcrumb>
          <MDBBreadcrumbItem active>Početna </MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb>
          <MDBBreadcrumbItem>Početna </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>I godina</MDBBreadcrumbItem>
        </MDBBreadcrumb>

        <MDBBreadcrumb>
          <MDBBreadcrumbItem>Pocetna</MDBBreadcrumbItem>
          <MDBBreadcrumbItem>I godina</MDBBreadcrumbItem>
          <MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </MDBContainer>

      <h3>Predmeti sa smera I godina</h3>
      <MDBLink>Algoritmi i programiranje</MDBLink>
      <MDBLink>Elektronske komponente>/</MDBLink>
      <MDBLink>Fizika></MDBLink>
      <MDBLink>Laboratorijski praktikum - Fizika></MDBLink>
      <MDBLink>Matematika I></MDBLink>
      <MDBLink>Matematika II</MDBLink>
      <MDBLink>Osnovi elektrotehnike I</MDBLink>
      <MDBLink>Osnovi elektrotehnike II</MDBLink>
      <MDBLink>Uvod u računarstvo></MDBLink>
      {/* this is footer */}
      <MDBFooter color="#878b91" className="font-medium pt-4 mt-4">
        <MDBContainer
          fluid
          className="text-center text-md-center"
        ></MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:
            {" © Studentski inovacioni centar Elektronskog fakulteta, 2014"}
          </MDBContainer>
        </div>
      </MDBFooter>
    </>
  );
};

export default BlanketiPeta;
