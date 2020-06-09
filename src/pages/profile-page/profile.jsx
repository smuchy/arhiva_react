import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import { GetUserInfo } from "./../../API/getUserInfo";
import EditProfile from "./editProfile/editProfile";
// import PCBuildsList from "./pc-builds-list/pc-builds-list";
import BlanketiList from "./blanketi-list/blanketi-list";

const Profile = (props) => {
  const [userInfo, setUserInfo] = useState("");
  const [toggleEditModal, setToggleEditModal] = useState(false);
  const [showData, setShowData] = useState("blanketi");
  useEffect(() => {
    GetUserInfo(props.admin, setUserInfo);
  }, [props.admin]);

  return (
    <MDBContainer className="profile-page">
      <MDBRow lg="12" className="user-page-container">
        <MDBCol lg="2" className="user-info-column">
          <MDBIcon icon="user-circle" size="10x" className="white-text" />
          <div className="info-wrapper">
            <div className="info-row">
              <h5>
                <MDBIcon icon="signature" className="white-text" />
                Ime:
              </h5>{" "}
              <p>{userInfo.firstName + " " + userInfo.lastName}</p>
            </div>
            <div className="info-row">
              <h5>
                <MDBIcon icon="envelope" className="white-text" />
                Email:
              </h5>{" "}
              <p>{userInfo.email}</p>
            </div>
          </div>
          <MDBInput
            label="PC BUILDS"
            type="radio"
            name="show-data"
            className="profile-radio-button"
            checked={showData === "users" ? true : false}
            onChange={() => setShowData("users")}
          />
          <MDBInput
            label="BLANKETI"
            type="radio"
            name="show-data"
            className="profile-radio-button"
            checked={showData === "blanketi" ? true : false}
            onChange={() => setShowData("blanketi")}
          />
        </MDBCol>
        <MDBCol lg="10" className="user-builds">
          {/* <MDBRow lg="12">
            {showData === "pc-builds" ? (
              // <PCBuildsList token={props.token} />
            ) : (
              showData === "favourites" && (
                // <FavouritesList token={props.token} />
              )
            )}
          </MDBRow> */}
          <BlanketiList admin={props.admin} />
        </MDBCol>
      </MDBRow>
      <EditProfile
        toggleEditModal={toggleEditModal}
        setToggleEditModal={setToggleEditModal}
        userInfo={userInfo}
        token={props.token}
      />
    </MDBContainer>
  );
};

export default Profile;
