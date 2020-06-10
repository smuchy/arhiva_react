import React, { useState, useEffect } from "react";
import { MDBFooter, MDBContainer } from "mdbreact";
import CategoryComponent from "./categoryComponent/categoryComponent";
import { GetAllSubjects } from "../../API/getAllSubjects";

const BlanketiPage = (props) => {
  const [allSubjects, setAllSubjects] = useState("");

  const PrvaGodina = [
    "Fizika",
    "Matematika 1",
    "Uvod u racunastvo",
    "Elektrotehnika",
  ];
  const DrugaGodina = [4, 5, 67, 7];
  const TrecaGodina = [7, 8, 9, 90, 6];
  const CetvrtaGodina = [8, 9, 6, 4, 3];
  const PetaGodina = [5, 4, 7, 9, 9];
  useEffect(() => {
    GetAllSubjects(localStorage.getItem("smer"), props.admin, setAllSubjects);
    console.log(allSubjects);
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
        <h1>
          {localStorage.getItem("smer") === "RII"
            ? "Racunarstvo i informatika"
            : localStorage.getItem("smer") === "EEG"
            ? "Elektroenergetika"
            : localStorage.getItem("smer") === "EKM"
            ? "Elektronske komponente i mikrosistemi"
            : localStorage.getItem("smer") === "EK"
            ? "Elektronika"
            : localStorage.getItem("smer") === "KIT"
            ? "Komunikacije i informacione tehnologije"
            : "Upravljanje sistemima"}
        </h1>

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
