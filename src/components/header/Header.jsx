import "./header.css";

import HeaderLink from "./HeaderLink";

import BurgerMenuIcon from "../../Icons/BurgerMenu.icon";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen((prevState) => !prevState);
  };

  return (
    <div className="fullbackground">
      <header className="container">
        <div className="header__element">
          <h1 className="header__logo">
            <Link
              to={"/"}
              style={{ color: "whitesmoke", textDecoration: "none" }}
            >
              Gorsi Tribe<span className="header__dot">.</span>
            </Link>
          </h1>
          <div className="desktop__nav">
            <HeaderLink />
          </div>
          <div className="mobile_nav">
            <BurgerMenuIcon
              className="header__burgerbtn"
              onClick={toggleMobileNav}
            />
          </div>
        </div>
      </header>
      {mobileNavOpen && (
        <div className="mobile-nav">
          <HeaderLink />
        </div>
      )}
    </div>
  );
}

export default Header;
