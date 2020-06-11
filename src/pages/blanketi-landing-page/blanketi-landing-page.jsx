import React from "react";
import { MDBContainer, MDBRow, MDBBtn } from "mdbreact";
import CardComponent from "./cardComponent/cardComponent";

const BlanketiLandingPage = (props) => {
  return (
    <MDBContainer className="blanketi-landing-page-container">
      <MDBRow className="card-row first-row">
        <CardComponent
          image="https://lh3.googleusercontent.com/proxy/IXvaE-T8IdrQQ5KlikmlCjabAXRTtIox7pJVuAcefcUw9y6azW0cMO8cLyVY_JaSbE3GTEvBejvVQz7CUABlD4ckeGSkjlzQFCUlgKbKuNHJqRb90i8vYRKB8p_UzDvgo8kjHeIMKkdMLSNIa_ZRPQrKttfffHLB"
          button={{
            text: "Racunarstvo i informatika",
            ref: "/blanketi-smer",
          }}
          href="RII"
        />
        <CardComponent
          image="https://seqred.pl/wp-content/uploads/2019/12/Electroenergetics_threats.jpg"
          button={{ text: "Elektroenergetika", ref: "/blanketi-smer" }}
          href="EKE"
        />
        <CardComponent
          image="https://media-exp1.licdn.com/dms/image/C4E1BAQFpW14eZgh8rw/company-background_10000/0?e=2159024400&v=beta&t=u7Brm_rfd2MFITqxPxnk-6EFDgsmIV65yajHjMD45qI"
          button={{
            text: "Elektronske komponente i mikrosistemi",
            ref: "/blanketi-smer",
          }}
          href="EiMT"
        />
      </MDBRow>
      <MDBRow className="card-row second-row">
        <CardComponent
          image="https://www.2dmaterialsmag.com/wp-content/uploads/2017/07/original.jpg"
          button={{ text: "Elektronika", ref: "/blanketi-smer" }}
          href="EKM"
        />
        <CardComponent
          image="https://www.phocuswire.com/uploadedimages/uploads/2014/08/aerospike.jpg"
          button={{
            text: "Komunikacije i informacione tehnologije",
            ref: "/blanketi-smer",
          }}
          href="TEL"
        />
        <CardComponent
          image="https://www.acg.org/sites/files/Management%20Information%20Systems_1.jpg"
          button={{
            text: "Upravljanje sistemima",
            ref: "/blanketi-smer",
          }}
          href="US"
        />
      </MDBRow>
    </MDBContainer>
  );
};

export default BlanketiLandingPage;
