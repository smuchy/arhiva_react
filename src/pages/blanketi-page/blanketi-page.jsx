import React, { useState, useEffect } from "react";
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
import { GetAllSubjects } from "../../API/getAllSubjects";

const BlanketiPage = (props) => {
  const [allSubjects, setAllSubjects] = useState("");

  useEffect(() => {
    GetAllSubjects(localStorage.getItem("smer"), setAllSubjects);
  }, [props.admin]);

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
