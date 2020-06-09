import React from "react";
import { MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";

const PopUpModal = ({ toggleModal, setToggleModal, image }) => {
  return (
    <MDBModal
      isOpen={toggleModal}
      toggle={() => setToggleModal(!toggleModal)}
      size="lg"
      className="final-build-modal"
    >
      <MDBModalHeader
        isOpen={toggleModal}
        toggle={() => setToggleModal(!toggleModal)}
      ></MDBModalHeader>
      <MDBModalBody>
        <img src={image} />
      </MDBModalBody>
    </MDBModal>
  );
};

export default PopUpModal;
