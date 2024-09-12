function HeaderLink() {
  return (
    <div className="header__links">
      <a href="#">Library</a>
      <a href="#">Blog</a>
      <a href="#">History</a>
      <div className="header__profile">
        <img
          src="/c532ffeef35e50ef0f8a3c590e8eaadc.jpg"
          className="header__profile__img"
          alt=""
        />
      </div>
    </div>
  );
}

export default HeaderLink;
