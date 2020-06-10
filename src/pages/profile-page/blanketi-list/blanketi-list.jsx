import React, { useState, useEffect } from "react";
import { GetAllBlanketi } from "../../../API/getAllBlanketi";
import BlanketItem from "./blanketItem/blanketItem";
import { MDBRow } from "mdbreact";

const BlanketiList = ({ admin }) => {
  const [blanketi, setBlanketi] = useState(null);
  useEffect(() => {
    GetAllBlanketi(admin, setBlanketi);
  }, [admin]);

  return (
    <div className="favourites-wrapper">
      <h1>Neodobreni Blanketi</h1>
      <MDBRow className="favourites-row-wrapper">
        {blanketi &&
          blanketi.map((blanket) => {
            if (blanket.status === false)
              return <BlanketItem blanket={blanket} admin={admin} />;
          })}
      </MDBRow>
    </div>
  );
};

export default BlanketiList;
