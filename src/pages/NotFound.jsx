import BackIcon from "../Icons/BackIcon.icon";

import { Link } from "react-router-dom";

const NotFound = ({ heading, text }) => {
  return (
    <div className="notfound_-wrapper">
      <img className="trademarkicon" src="/trademarkgorsi.png" alt="" />
      <h2 className="heading__h2">{heading}</h2>
      <p className="paragraph notfound__paragraph">{text}</p>
      <div className="btn">
        <Link to={"/"}>
          <div className="backbtn">
            <BackIcon style={{ width: "2rem" }} />

            <button>Back to Homepage</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
