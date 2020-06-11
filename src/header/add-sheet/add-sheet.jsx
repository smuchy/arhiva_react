import React, { useState } from "react";
import {
  MDBModal,
  MDBInput,
  MDBModalBody,
  MDBModalHeader,
  MDBBtn,
} from "mdbreact";
import { AddSheet } from "../../API/addSheet";

const AddSheetPopUpModal = ({ toggleAddSheet, setToggleAddSheet }) => {
  const [ispitnirok, setIspitniRok] = useState("");
  const [slika, setSlika] = useState("");
  const [predmet, setPredmet] = useState("");
  const input = {
    Title: ispitnirok,
    Content: slika,
    SubjectName: predmet,
  };
  return (
    <MDBModal
      isOpen={toggleAddSheet}
      toggle={() => setToggleAddSheet(!toggleAddSheet)}
      size="lg"
      className="final-build-modal"
    >
      <MDBModalHeader
        isOpen={toggleAddSheet}
        toggle={() => setToggleAddSheet(!toggleAddSheet)}
      >
        Dodaj Blanket
      </MDBModalHeader>
      <MDBModalBody>
        <MDBInput
          label="Ispitni Rok"
          type="text"
          value={ispitnirok}
          onChange={(event) => setIspitniRok(event.target.value)}
        />
        <MDBInput
          label="URL slike"
          type="text"
          value={slika}
          onChange={(event) => setSlika(event.target.value)}
        />
        <MDBInput
          label="Naziv Predmeta"
          type="text"
          value={predmet}
          onChange={(event) => setPredmet(event.target.value)}
        />
        <MDBBtn color="elegant" onClick={() => AddSheet(input)}>
          Dodaj
        </MDBBtn>
      </MDBModalBody>
    </MDBModal>
  );
};

export default AddSheetPopUpModal;
