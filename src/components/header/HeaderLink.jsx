import { Link } from "react-router-dom";
import { useUserInfo } from "../../../context/UserContext";

import LogOutIcon from "../../Icons/LogOut.icon";

function HeaderLink() {
  const { userInfo, setUserInfo } = useUserInfo();

  const handleLogout = () => {
    setUserInfo(false);
  };

  return (
    <div className="header__links">
      <Link to={"/"}>Library</Link>
      <Link to={"/blog"}>Blog</Link>
      <Link to={"/"}>History</Link>
      {/* <a href="#">Library</a>
      <a href="/blog">Blog</a>
      <a href="#">History</a> */}

      {userInfo && userInfo.userId ? (
        <div className="header__profile">
          <Link to={"/profile"}>
            <img
              src="/c532ffeef35e50ef0f8a3c590e8eaadc.jpg"
              className="header__profile__img"
              alt="Profile"
            />
          </Link>
          <div onClick={handleLogout} className="logout__icon">
            <LogOutIcon style={{ width: "1.9rem", color: "whitesmoke" }} />
          </div>
        </div>
      ) : (
        <Link to={"/auth/login"}>
          <button className="authbtn">Sign In</button>
        </Link>
      )}
    </div>
  );
}

export default HeaderLink;
