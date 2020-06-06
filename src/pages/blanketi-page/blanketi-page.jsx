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
} from "mdbreact";

const BlanketiPage = () => {
  return (
    <>
      <div className="blanket-page-wrapper">
        <img
          src="https://d32xj74kbqkoqn.cloudfront.net/uploads/trail/trail_image/13/Front-End_Banner_1920x1080.jpg"
          className="img-fluid image-on-top"
          alt=""
        />

        <h1>Elektronski fakultet - arhiva blanketa</h1>
        <p>
          Elektronski fakultet - arhiva blanketa Izaberite godinu i smer da
          biste videli dostupne ispite.
        </p>
        <div className="collapsible-wrapper">
          <Collapsible className="trigger-for-collapsible" trigger="I godina">
            <MDBLink className="blanket-page-link">
              Algoritmi i programiranje
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Elektronske komponente
            </MDBLink>
            <MDBLink className="blanket-page-link">Fizika</MDBLink>
            <MDBLink className="blanket-page-link">
              Laboratorijski praktikum - Fizika
            </MDBLink>
            <MDBLink className="blanket-page-link">Matematika I</MDBLink>
            <MDBLink className="blanket-page-link">Matematika II</MDBLink>
            <MDBLink className="blanket-page-link">
              Osnovi elektrotehnike I
            </MDBLink>
            <MDBLink className="blanket-page-link">
              Osnovi elektrotehnike II
            </MDBLink>
            <MDBLink className="blanket-page-link">Uvod u računarstvo</MDBLink>
          </Collapsible>
          <Collapsible className="trigger-for-collapsible" trigger="II godina">
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
          </Collapsible>

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
      </div>
    </>
  );
};

export default BlanketiPage;
