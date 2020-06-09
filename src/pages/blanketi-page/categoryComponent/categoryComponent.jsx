import React, { useState } from "react";
import { MDBLink, MDBCollapse, MDBBtn } from "mdbreact";

const CategoryComponent = ({ buttonName, linksArray }) => {
  const [toggleCollapsible, setToggleCollapsible] = useState(false);
  return (
    <div>
      <MDBBtn
        color="primary"
        onClick={() => setToggleCollapsible(!toggleCollapsible)}
        style={{ marginBottom: "1rem" }}
      >
        {buttonName}
      </MDBBtn>
      <MDBCollapse id="basicCollapse" isOpen={toggleCollapsible}>
        {linksArray.map((link) => {
          return <MDBLink>{link}</MDBLink>;
        })}
      </MDBCollapse>
    </div>
  );
};

export default CategoryComponent;
