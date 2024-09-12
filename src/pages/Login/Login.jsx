import { useState } from "react";
import "./login.css";

import AuthForm from "./forms/AuthForm";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginToggle = () => {
    setIsLogin((prevLogin) => !prevLogin);
  };

  return (
    <div className="fullbackground login__background">
      <div className="container">
        <div className="loginpage__wrapper">
          <div className="login__sideimg">
            <img src="/history2.png" alt="" />
          </div>
          <div className="login__form">
            <div className="login__switcher">
              <button
                className={
                  isLogin ? "switcherbtn switcherbtn__active" : "switcherbtn"
                }
                onClick={handleLoginToggle}
              >
                Login
              </button>
              <button
                className={
                  !isLogin ? "switcherbtn switcherbtn__active" : "switcherbtn"
                }
                onClick={handleLoginToggle}
              >
                Register
              </button>
            </div>
            <AuthForm isLogin={isLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
