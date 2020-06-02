import React from "react";
import { MDBContainer, MDBView, MDBMask, MDBRow, MDBCol } from "mdbreact";

const HomePage = () => {
  return (
    <MDBContainer className="home-page-container">
      <MDBRow md="12" className="test">
        <MDBCol md="6" className="colLeft">
          <MDBView>
            <img
              src="https://media.istockphoto.com/photos/three-smiling-students-study-together-in-the-library-picture-id513381420?k=6&m=513381420&s=612x612&w=0&h=xTDiZ0G30VUjkndcFHqdwoLhk8-TeqX0v3B8If25jOY="
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="blue-light"></MDBMask>
          </MDBView>
        </MDBCol>
        <MDBCol md="6" className="colRight">
          <MDBView>
            <img
              src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
              className="img-fluid"
              alt=""
            />
            <MDBMask className="flex-center" overlay="yellow-light"></MDBMask>
          </MDBView>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default HomePage;
