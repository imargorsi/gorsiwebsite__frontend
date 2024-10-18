import SingleBlogCard from "../../components/SingleBlogCard/SingleBlogCard";

import Header from "../../components/Header/Header";

import "./singleblog.css";

import blogData from "../../../blogData.json";

import { useParams } from "react-router";

function SingleBlog() {
  const { title } = useParams();

  const findBlog = () => {
    const blogTitle = title.split("-").join(" ");
    return blogData.blogs.find((singleBlog) => blogTitle === singleBlog.title);
  };

  const singleBlogData = findBlog();

  return (
    <div>
      <Header />
      <div className="container">
        <div className="blogsection__wrapper">
          <div className="blogfeaturesection">
            <SingleBlogCard
              key={singleBlogData.title}
              blogTitle={singleBlogData.title}
              blogAuthor={singleBlogData.author}
              blogImage={singleBlogData.image}
              blogDesc={singleBlogData.desc}
              singleBlog={true}
            />
          </div>
          <div className="blogcontentsection">
            <p className="paragraph">{singleBlogData.firstParagraph}</p>
            <p className="paragraph">{singleBlogData.secoundParagraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
