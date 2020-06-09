import React, { useState } from "react";
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
  MDBCollapse,
} from "mdbreact";
import CategoryComponent from "./categoryComponent/categoryComponent";

const BlanketiPage = () => {
  const PrvaGodina = [
    "Algoritmi i programiranje",
    "Elektronske komponente",
    "Laboratorijski praktikum - Fizika",
    "Osnovi elektrotehnike I",
    "Osnovi elektrotehnike II",
    "Uvod u računarstvo",
  ];
  const DrugaGodina = [
    " Računarstvo i informatika - II godina",
    "Upravljanje sistemima - II godina",
    "Telekomunikacije - II godina",
    "Elektronika i mikroprocesorska tehnika - II godina",
    "Elektronske komponente i mikrosistemi - II godina",
    " Elektroenergetika - II godina",
  ];
  return (
    <>
      <div className="blanket-page-wrapper">
        <div className="image-wrapper">
          <img
            src="https://d32xj74kbqkoqn.cloudfront.net/uploads/trail/trail_image/13/Front-End_Banner_1920x1080.jpg"
            className="img-fluid image-on-top"
            alt=""
          />
        </div>

        <h1>Elektronski fakultet - arhiva blanketa</h1>
        <p>
          Elektronski fakultet - arhiva blanketa Izaberite godinu i smer da
          biste videli dostupne ispite.
        </p>
        <div className="collapsible-wrapper">
          <CategoryComponent buttonName={"I godina"} linksArray={PrvaGodina} />
          <CategoryComponent
            buttonName={"II godina"}
            linksArray={DrugaGodina}
          />

          {/* <Collapsible className="trigger-for-collapsible" trigger="II godina">
            <MDBLink className="blanket-page-link">
              {" "}
              Računarstvo i informatika - II godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Upravljanje sistemima - II godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Telekomunikacije - II godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Elektronika i mikroprocesorska tehnika - II godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Elektronske komponente i mikrosistemi - II godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Elektroenergetika - II godina;
            </MDBLink>
          </Collapsible>
          <Collapsible className="trigger-for-collapsible" trigger="III godina">
            <MDBLink className="blanket-page-link">
              {" "}
              Računarstvo i informatika - III godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Upravljanje sistemima - III godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Telekomunikacije - III godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Elektronika i mikroprocesorska tehnika - III godina
            </MDBLink>
            <MDBLink>
              {" "}
              Elektronske komponente i mikrosistemi - III godina{" "}
            </MDBLink>
            <MDBLink>Elektroenergetika - III godina</MDBLink>
          </Collapsible>
          <Collapsible className="trigger-for-collapsible" trigger="IV godina">
            <MDBLink className="blanket-page-link">
              {" "}
              Računarstvo i informatika - IV godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Upravljanje sistemima - IV godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Telekomunikacije - IV godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Elektronika i mikroprocesorska tehnika - IV godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Elektronske komponente i mikrosistemi - IV godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Elektroenergetika - IV godina
            </MDBLink>
          </Collapsible>
          <Collapsible className="trigger-for-collapsible" trigger="V godina">
            <MDBLink className="blanket-page-link">
              Računarstvo i informatika - V godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Upravljanje sistemima - V godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Telekomunikacije - V godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Elektronika i mikroprocesorska tehnika - V godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Elektronske komponente i mikrosistemi - V godina
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Elektroenergetika - V godina
            </MDBLink>
          </Collapsible> */}
        </div>
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
      </div>
    </>
  );
};

export default BlanketiPage;
