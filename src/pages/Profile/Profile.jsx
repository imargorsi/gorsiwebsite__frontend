import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Header from "../../components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import ProfileImage from "./ProfileImage";
import { useUserInfo } from "../../../context/UserContext";
import "./profile.css";

import EditIcon from "../../Icons/Edit.icon";
import Modal from "./Modal/Modal";
import NotFound from "../NotFound";

function Profile() {
  const { userInfo } = useUserInfo();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getUserDetails = async () => {
      setLoading(true);
      try {
        if (id) {
          const response = await axios.get(`http://localhost:3000/api/${id}`);
          if (response.data.message === "User found successfully") {
            setUserDetails(response.data.data);
          } else {
            setUserDetails(null);
          }
        } else {
          setUserDetails(userInfo);
        }
      } catch (error) {
        console.log("Error finding user:", error);
      } finally {
        setLoading(false);
      }
    };

    getUserDetails();
  }, [id, userInfo]);

  if (loading)
    return (
      <div className="loader__wrapper">
        <div className="loader"></div>
      </div>
    );

  // Default values shown

  return (
    <>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}

      <Header />
      <div className="fullbackground profilebackground">
        <div className="container">
          {userDetails ? (
            <div className="profile__wrapper">
              <div className="userprofile">
                <div className="profile__info">
                  <ProfileImage
                    imgsrc={
                      userDetails.profilePhoto
                        ? "userDetails.profilePhoto"
                        : "/default.jpg"
                    }
                  />

                  <div className="profile__info__text">
                    <h3 className="heading__h3">{userDetails.fullName}</h3>
                    <p className="paragraph">{userDetails.email}</p>
                    <p className="paragraph profile__info__summary">
                      {userDetails.summary || "No summary available."}
                    </p>
                    {!id && (
                      <div
                        className="editButton"
                        onClick={() => setModalOpen(true)}
                      >
                        <EditIcon style={{ width: "2rem" }} />
                        <p className="editbtntext">Edit Profile</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="userprofile__gallery">
                  <h2 className="heading__h2">My Gallery:</h2>
                  <div className="gallery__images">
                    <ProfileImage
                      imgsrc={
                        userDetails.profilePhoto
                          ? "userDetails.galleryImage1"
                          : "/default.jpg"
                      }
                    />
                    <ProfileImage
                      imgsrc={
                        userDetails.profilePhoto
                          ? "userDetails.galleryImage2"
                          : "/default.jpg"
                      }
                    />
                    <div className="gorsitrademarklogo"></div>
                  </div>
                </div>
              </div>
              <Sidebar userDetails={userDetails} />
            </div>
          ) : (
            <NotFound
              heading={"404 - User Not Found"}
              text={"The user you are looking for does not exist."}
              forUser={true}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
