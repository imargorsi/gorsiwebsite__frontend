import { useLocation } from "react-router-dom";
import "./login.css";

import LoginForm from "./forms/LoginForm";
import { Link } from "react-router-dom";
import SignUpForm from "./forms/SignUpForm";

function Auth() {
  const location = useLocation();

  const isLogin = location.pathname === "/auth/login";

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
                >
                  Login
                </button>
              </Link>

              <Link to={"/auth/signup"}>
                <button
                  className={
                    !isLogin ? "switcherbtn switcherbtn__active" : "switcherbtn"
                  }
                >
                  Register
                </button>
              </Link>
            </div>
            {isLogin ? <LoginForm /> : <SignUpForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
