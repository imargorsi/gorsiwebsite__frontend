function MembershipCard() {
  return (
    <div className="membershipcard">
      <img
        className="memberscard__background"
        src="\trademarkgorsi.png"
        alt=""
      />

      <div className="members__details__wrapper">
        <img className="userimage" src="/default.jpg" alt="" />

        <div className="members__detail">
          <p className="paragraph members__id">Membership ID# 123</p>
          <h3 className="heading__h3 members__name">AR GORSI</h3>
        </div>
      </div>
    </div>
  );
}

export default MembershipCard;
