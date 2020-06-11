import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import BlanketItem from "../../profile-page/blanketi-list/blanketItem/blanketItem";
import { GetSheet } from "../../../API/getSheet";
import axios from "axios";

const SubjectPage = (props) => {
  const [sheets, setSheets] = useState("");

  useEffect(() => {
    GetSheet(localStorage.getItem("subject"), setSheets);
  }, []);

  console.log(sheets);
  return (
    <MDBContainer className="subject-page-container">
      <h1>{localStorage.getItem("subject")}</h1>
      <MDBRow className="blanketi-wrapper">
        {sheets &&
          sheets.map((sheet) => {
            if (sheet.status === true)
              return <BlanketItem blanket={sheet} admin={props.admin} />;
          })}
      </MDBRow>
    </MDBContainer>
  );
};

export default SubjectPage;
