import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import "./profile.css";

import Sidebar from "./Sidebar/Sidebar";
import ProfileImage from "./ProfileImage";

function Profile() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <div className="fullbackground">
        <div className="profile__wrapper">
          <div className="userprofile">
            <div className="profile__info">
              <ProfileImage />
              <div className="profile__info__text">
                <h3 className="heading__h3">Ar Gorsi</h3>
                <p className="paragraph">argorsi707@gmail.com</p>
                <p className="paragraph profile__info__summary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  error, voluptatum molestias aut accusantium cumque qui! Esse
                  sequi, ullam consequuntur perspiciatis rerum dolore, dolorum
                  eum ipsa magnam, a obcaecati reiciendis.
                </p>
              </div>
            </div>
            <div className="userprofile__gallery">
              <h2 className="heading__h2">My Gallery:</h2>
              <div className="gallery__images">
                <ProfileImage />
                <ProfileImage />
                <ProfileImage />
                <div className="gorsitrademarklogo"></div>
              </div>
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Profile;
