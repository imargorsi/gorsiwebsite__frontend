import "./header.css";

function Header() {
  // for mobile nav
  function changingNav() {
    const mobileNav = document.getElementById("mobile-nav");

    if (mobileNav.style.display === "flex") {
      mobileNav.style.display = "none";
    } else {
      mobileNav.style.display = "flex";
    }
  }

  return (
    <div className="fullbackground">
      <header className="container">
        <div className="header__element">
          <h1 className="header__logo">
            Gorsi Tribe<span className="header__dot">.</span>
          </h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="header__burgerbtn"
            onClick={changingNav}
          >
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          <div className="header__links">
            <a href="/">Home</a>
            <a href="#">Blog</a>
            <a href="#">History</a>
          </div>
        </div>

        <div className="mobile-nav " id="mobile-nav">
          <a href="/">Home</a>
          <a href="#">Blog</a>
          <a href="#">History</a>
        </div>
      </header>
    </div>
  );
}

export default Header;
