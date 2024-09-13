import Header from "../../components/Header/Header";
import "./profile.css";

import axios from "axios";

import { useParams } from "react-router";

import Sidebar from "./Sidebar/Sidebar";
import ProfileImage from "./ProfileImage";
import { useEffect, useState } from "react";

function Profile() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userDetails = await axios.get(`http://localhost:3000/api/${id}`);

        if (userDetails.data.message === "User found successfully") {
          setUserDetails(userDetails.data.data);
        } else {
          setUserDetails(null);
        }
      } catch (error) {
        console.log("error finding user ", error);
      }
    };
    getUserDetails();
  }, []);

  return (
    <>
      <Header />

      <div className="fullbackground profilebackground">
        <div className="container">
          {userDetails && (
            <div className="profile__wrapper">
              <div className="userprofile">
                <div className="profile__info">
                  <ProfileImage />
                  <div className="profile__info__text">
                    <h3 className="heading__h3">{userDetails.fullName}</h3>
                    <p className="paragraph">{userDetails.email}</p>

                    <p className="paragraph profile__info__summary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos error, voluptatum molestias aut accusantium cumque
                      qui! Esse sequi, ullam consequuntur perspiciatis rerum
                      dolore, dolorum eum ipsa magnam, a obcaecati reiciendis.
                    </p>
                  </div>
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

              <Sidebar />
            </div>
          )}

          {!userDetails && <p>User Not Found</p>}
        </div>
      </div>
    </>
  );
}

export default Profile;
