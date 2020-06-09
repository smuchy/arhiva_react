import React, { useState, useEffect } from "react";
import { MDBFooter, MDBContainer } from "mdbreact";
import CategoryComponent from "./categoryComponent/categoryComponent";
import { GetAllSubjects } from "../../API/getAllSubjects";

const BlanketiPage = (props) => {
  const [allSubjects, setAllSubjects] = useState("");

  const PrvaGodina = [];
  const DrugaGodina = [];
  const TrecaGodina = [];
  const CetvrtaGodina = [];
  const PetaGodina = [];
  useEffect(() => {
    GetAllSubjects(localStorage.getItem("smer"), setAllSubjects);
    allSubjects.length > 0 &&
      allSubjects.map((subject) => {
        subject.year === 1
          ? PrvaGodina.push(subject)
          : subject.year === 2
          ? DrugaGodina.push(subject)
          : subject.year === 3
          ? TrecaGodina.push(subject)
          : subject.year === 4
          ? CetvrtaGodina.push(subject)
          : PetaGodina.push(subject);
      });
  }, [props.admin]);

  return (
    <>
      <div className="blanket-page-wrapper">
        <div className="image-wrapper">
          <img
            src="https://mk0digitallearn7ttjx.kinstacdn.com/wp-content/uploads/2017/03/digital-book.jpg"
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
          <CategoryComponent
            buttonName={"III godina"}
            linksArray={TrecaGodina}
          />
          <CategoryComponent
            buttonName={"IV godina"}
            linksArray={CetvrtaGodina}
          />
          <CategoryComponent buttonName={"V godina"} linksArray={PetaGodina} />
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
