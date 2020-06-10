import React from "react";
import { MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";

const PopUpModal = ({ toggleModal, setToggleModal, image, title }) => {
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
      >
        {title}
      </MDBModalHeader>
      <MDBModalBody>
        <img src={image} />
      </MDBModalBody>
    </MDBModal>
  );
};

export default PopUpModal;
