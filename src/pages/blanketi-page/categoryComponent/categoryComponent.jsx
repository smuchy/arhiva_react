import React, { useState } from "react";
import { MDBLink, MDBCollapse, MDBBtn } from "mdbreact";

const CategoryComponent = ({ buttonName, linksArray }) => {
  const [toggleCollapsible, setToggleCollapsible] = useState(false);
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
        {/* {linksArray.lenght > 0 && */}
        {linksArray.map((link) => {
          return (
            <MDBLink>{link.subjectName ? link.subjectName : link}</MDBLink>
          );
        })}
      </MDBCollapse>
    </div>
  );
};

export default CategoryComponent;
