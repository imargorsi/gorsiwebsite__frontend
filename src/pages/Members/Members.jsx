import "./members.css";

import MembershipCard from "./MembershipCard";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

function Members() {
  return (
    <>
      <Breadcrumb title={"Our Members"} />
      <div className="container">
        <div className="memebers__wrapper">
          <div className="memebers__content">
            <h2 className="heading__h2">Honored Members of the Gorsi Clan</h2>
            <p className="paragraph members__paragraph">
              Together, we stand as the pillars of the Gorsi legacy, united by
              heritage, strength, and an unwavering spirit. Every member of this
              tribe carries forward the proud traditions of our ancestors,
              adding their own chapter to the ever-growing story of our
              community. Here, we celebrate our shared history, achievements,
              and the bonds that make us stronger. Welcome to the family.
            </p>
          </div>
          <div className="members__cards">
            <MembershipCard />
            <MembershipCard />
            <MembershipCard />
            <MembershipCard />
            <MembershipCard />
            <MembershipCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Members;
