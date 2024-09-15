import { Link } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (
    <div className="fullbackground heroimg">
      <div className="container ">
        <h2 className="heading__h1 hero__heading">
          Discover the Legacy of the Gorsi Tribe Unveiling Our Rich History and
          Traditions
        </h2>
        <div className="imgelement">
          <div className="div-1 book"></div>
          <div className="div-1 people"></div>
          <Link to={"/blog"}>
            <div className="div-1 writing"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
