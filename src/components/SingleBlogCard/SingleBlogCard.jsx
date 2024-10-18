import "./singleblogcard.css";

import FacebookIcon from "../../Icons/Facebook.icon";
import InstagramIcon from "../../Icons/Instagram.icon";
import TwitterIcon from "../../Icons/Twitter.icon";
import WhatsAppIcon from "../../Icons/WhatsApp.icon";

import { useNavigate } from "react-router";

function SingleBlogCard({
  small,
  blogPage,
  singleBlog,
  blogTitle,
  blogAuthor,
  blogImage,
  blogDesc,
}) {
  const navigation = useNavigate();

  const createParams = (title) => {
    const blogParams = title.split(" ").join("-");
    return blogParams;
  };

  return (
    <div
      className={blogPage ? `grid_1_singleblog blogpage` : `grid_1_singleblog`}
      onClick={() => {
        navigation(`/blog/${createParams(blogTitle.toLowerCase())}`);
      }}
    >
      <img
        className={
          small ? "grid_1_singleblog__img__sm" : "grid_1_singleblog__img"
        }
        src={blogImage}
        alt=""
      />
      <div className="grid_1_singleblog__text__content">
        <h3 className="heading__h4">{blogTitle}</h3>
        {!small && (
          <p className="paragraph singleblog__paragraph">{blogDesc}</p>
        )}
        <p className="paragraph">By {blogAuthor}</p>
        {singleBlog && (
          <div className="blog__sociallinks">
            <a
              href={"https://www.facebook.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon style={{ width: "3rem" }} />
            </a>
            <a
              href={"https://www.facebook.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon style={{ width: "3rem" }} />
            </a>

            <a
              href={"https://www.facebook.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon style={{ width: "3rem" }} />
            </a>
            <a
              href={"https://www.facebook.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon style={{ width: "3rem" }} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleBlogCard;
