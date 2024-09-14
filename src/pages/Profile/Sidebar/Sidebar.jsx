import CopyToClipboardComponent from "./CopytoClipboard";
import "./sidebar.css";

import FacebookIcon from "../../../Icons/Facebook.icon";
import InstagramIcon from "../../../Icons/Instagram.icon";
import TwitterIcon from "../../../Icons/Twitter.icon";

function Sidebar({ userDetails }) {
  return (
    <div className="sidebar">
      <h2 className="sidebar__heading">About Me</h2>

      <CopyToClipboardComponent id={userDetails.userId} />

      <div className="sidebar__userinfo">
        <p className="paragraph userinfo">
          City: {userDetails.city ? userDetails.city : ""}
        </p>
        <p className="paragraph userinfo">
          Membership ID#: {userDetails.userId ? userDetails.userId : null}
        </p>
        <p className="paragraph userinfo">
          Profession:
          {userDetails.profession ? userDetails.profession : ""}
        </p>
        <p className="paragraph userinfo">
          Date of Birth:{" "}
          {userDetails.dateOfBirth ? userDetails.dateOfBirth : ""}
        </p>
        <p className="paragraph userinfo">
          Contact: {userDetails.contact ? userDetails.contact : ""}
        </p>
      </div>
      <div className="socialmedilinks">
        <h3 className="heading__h3 ">Social Media Profiles:</h3>
        <div className="socialmedilinks__icons">
          <FacebookIcon width={"5rem"} style={{ cursor: "pointer" }} />
          <InstagramIcon width={"5rem"} style={{ cursor: "pointer" }} />
          <TwitterIcon width={"5rem"} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
