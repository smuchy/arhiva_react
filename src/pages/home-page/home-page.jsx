import React from "react";
import { MDBContainer, MDBView, MDBMask, MDBRow } from "mdbreact";

const HomePage = () => {
    return (
        <MDBContainer className="home-page-container">
            <MDBView src="./images/arhiva_background.jpg">
            <MDBMask pattern={8} overlay="red-strong" className="flex-center">
                <div className = "separator-line"></div>

            </MDBMask>
            </MDBView>
        </MDBContainer>
    );
}

export default HomePage;