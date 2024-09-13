import { useState } from "react";
import "./login.css";

import AuthForm from "./forms/AuthForm";
import { Link, useParams } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginToggle = () => {
    setIsLogin((prevLogin) => !prevLogin);
  };

  const { state } = useParams();

  return (
    <div className="fullbackground login__background">
      <div className="container">
        <div className="loginpage__wrapper">
          <div className="login__sideimg">
            <img src="/history2.png" alt="" />
          </div>
          <div className="login__form">
            <div className="login__switcher">
              <Link to={"/auth/login"}>
                <button
                  className={
                    isLogin ? "switcherbtn switcherbtn__active" : "switcherbtn"
                  }
                  onClick={handleLoginToggle}
                >
                  Login
                </button>
              </Link>

              <Link to={"/auth/signup"}>
                <button
                  className={
                    !isLogin ? "switcherbtn switcherbtn__active" : "switcherbtn"
                  }
                  onClick={handleLoginToggle}
                >
                  Register
                </button>
              </Link>
            </div>
            <AuthForm isLogin={isLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
