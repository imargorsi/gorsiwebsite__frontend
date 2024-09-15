import "./singleblogcard.css";

function SingleBlogCard({ small, blogPage }) {
  return (
    <div
      className={blogPage ? `grid_1_singleblog blogpage` : `grid_1_singleblog`}
    >
      <img
        className={
          small ? "grid_1_singleblog__img__sm" : "grid_1_singleblog__img"
        }
        src="/hero.jpg"
        alt=""
      />
      <div className="grid_1_singleblog__text__content">
        <h3 className="heading__h4">How to Read Books in 2023? And More</h3>
        {!small && (
          <p className="paragraph singleblog__paragraph">
            The worlds largest book is a Kuan Yin Buddhist scripture. Created in
            China during the Ming Dynasty, it is about
          </p>
        )}
        <p className="paragraph">By Ar Gorsi</p>
      </div>
    </div>
  );
}

export default SingleBlogCard;
