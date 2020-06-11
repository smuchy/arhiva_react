import React, { useState } from "react";
import { MDBLink, MDBCollapse, MDBBtn } from "mdbreact";
import { SubjectPage } from "../subject-page/subject-page";

const CategoryComponent = ({ buttonName, linksArray }) => {
  const [toggleCollapsible, setToggleCollapsible] = useState(false);
  const sheetsArray = [];
  return (
    <div className="category-component">
      <MDBBtn
        color="warning"
        onClick={() => setToggleCollapsible(!toggleCollapsible)}
        style={{ marginBottom: "1rem" }}
      >
        {buttonName}
      </MDBBtn>
      <MDBCollapse isOpen={toggleCollapsible}>
        {linksArray.map((link) => {
          link.sheets.map((sheet) => {
            sheetsArray.push(sheet);
          });
          return (
            <MDBLink
              to="/subject"
              onClick={() => {
                localStorage.setItem("subject", link.subjectName);
                localStorage.setItem(
                  "subjectSheets",
                  JSON.stringify(sheetsArray)
                );
              }}
            >
              {link.subjectName ? link.subjectName : link}
            </MDBLink>
          );
        })}
      </MDBCollapse>
    </div>
  );
};

export default CategoryComponent;
