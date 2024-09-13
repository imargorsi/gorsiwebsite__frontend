import CopyToClipboardComponent from "./CopytoClipboard";
import "./sidebar.css";

import FacebookIcon from "../../../Icons/Facebook.icon";
import InstagramIcon from "../../../Icons/Instagram.icon";
import TwitterIcon from "../../../Icons/Twitter.icon";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar__heading">About Me</h2>
      <CopyToClipboardComponent />
      <div className="sidebar__userinfo">
        <p className="paragraph userinfo">City: Lahore</p>
        <p className="paragraph userinfo">Membership ID#: 0001</p>
        <p className="paragraph userinfo">Profession: Software Engineer</p>
        <p className="paragraph userinfo">Date of Birth: 30 July, 1999</p>
        <p className="paragraph userinfo">Contact: 0309 4713379</p>
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
