import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Header from "../../components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import ProfileImage from "./ProfileImage";
import { useUserInfo } from "../../../context/UserContext";
import "./profile.css";

import EditIcon from "../../Icons/Edit.icon";

function Profile() {
  const { userInfo } = useUserInfo();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

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
        setError("Error fetching user details");
        console.log("Error finding user:", error);
      } finally {
        setLoading(false);
      }
    };

    getUserDetails();
  }, [id, userInfo]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <div className="fullbackground profilebackground">
        <div className="container">
          {userDetails ? (
            <div className="profile__wrapper">
              <div className="userprofile">
                <div className="profile__info__wrapper">
                  <div className="profile__info">
                    <ProfileImage />

                    <div className="profile__info__text">
                      <h3 className="heading__h3">{userDetails.fullName}</h3>
                      <p className="paragraph">{userDetails.email}</p>
                      <p className="paragraph profile__info__summary">
                        {userDetails.summary || "No summary available."}
                      </p>
                    </div>
                  </div>
                  {!id && (
                    <div className="editButton">
                      <EditIcon style={{ width: "2rem" }} />
                      <p className="editbtntext">Edit Profile</p>
                    </div>
                  )}
                </div>

                <div className="userprofile__gallery">
                  <h2 className="heading__h2">My Gallery:</h2>
                  <div className="gallery__images">
                    <ProfileImage />
                    <ProfileImage />
                    <div className="gorsitrademarklogo"></div>
                  </div>
                </div>
              </div>
              <Sidebar userDetails={userDetails} />
            </div>
          ) : (
            <p>User Not Found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
