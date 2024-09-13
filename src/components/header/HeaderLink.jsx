import { Link } from "react-router-dom";
import { useUserInfo } from "../../../context/UserContext";

function HeaderLink() {
  const { userInfo } = useUserInfo();

  return (
    <div className="header__links">
      <a href="#">Library</a>
      <a href="#">Blog</a>
      <a href="#">History</a>

      {userInfo && userInfo.userId ? (
        <Link to={`/profile/${userInfo.userId}`}>
          <div className="header__profile">
            <img
              src="/c532ffeef35e50ef0f8a3c590e8eaadc.jpg"
              className="header__profile__img"
              alt="Profile"
            />
          </div>
        </Link>
      ) : (
        <Link to={"/auth/login"}>
          <button className="authbtn">Sign In</button>
        </Link>
      )}
    </div>
  );
}

export default HeaderLink;
