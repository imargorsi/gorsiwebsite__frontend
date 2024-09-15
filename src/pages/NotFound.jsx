import BackIcon from "../Icons/BackIcon.icon";

import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="notfound_-wrapper">
        <img className="trademarkicon" src="/trademarkgorsi.png" alt="" />
        <h2 className="heading__h2">404 - Page Not Found</h2>
        <p className="paragraph notfound__paragraph">
          The page you are looking for does not exist.
        </p>
        <div className="btn">
          <Link to={"/"}>
            <div className="backbtn">
              <BackIcon style={{ width: "2rem" }} />

              <button>Back to Homepage</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
