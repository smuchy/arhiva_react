import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBMask,
  MDBIcon,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader,
} from "mdbreact";
import PopUpModal from "./pop-up-modal";
// import { RemoveFromFavourites } from "../../../../API/removeFromFavourites-API";

const BlanketItem = ({ blanket, admin }) => {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <MDBRow lg="12" className="component-container favourite">
      <MDBCol lg="3" className="component-image-container">
        <div className="image-container">
          <MDBView hover zoom>
            <img
              src={blanket && blanket.content}
              onClick={() => setToggleModal(!toggleModal)}
            />
          </MDBView>
        </div>
      </MDBCol>
      <MDBCol lg="9" className="info-container">
        <MDBRow lg="12">
          <MDBCol lg="9" className="item-info">
            <h4>{blanket && blanket.title}</h4>
            <p>{blanket && blanket.title}</p>
          </MDBCol>
          <MDBCol lg="3" className="item-price-wrapper">
            <MDBBtn
              href="/profile"
              className="remove-button"
              color="elegant"
              // onClick={() => RemoveFromFavourites(token, favourite.name)}
            >
              <MDBIcon icon="minus" />
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCol>
      <PopUpModal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        image={blanket.content}
      />
    </MDBRow>
  );
};
export default BlanketItem;
