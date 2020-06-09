import React, { useState, useEffect } from "react";
import { GetAllBlanketi } from "../../../API/getAllBlanketi";
// import FavouriteItem from "./favouriteItem/favouriteItem";
import { MDBRow } from "mdbreact";

const BlanketiList = ({ admin }) => {
  const [approvals, setBlanketi] = useState(null);
  useEffect(() => {
    GetAllBlanketi(admin, setBlanketi);
  }, [admin]);

  return (
    <div className="favourites-wrapper">
      <h1>Favourites</h1>
      <MDBRow className="favourites-row-wrapper">
        {/* {approvals &&
          approvals.map((approval) => {
            return (
              <FavouriteItem favourite={favourite.component} token={token} />
            );
          })} */}
      </MDBRow>
    </div>
  );
};

export default BlanketiList;
