import Header from "../../components/Header/Header";
import "./blog.css";
import SingleBlogCard from "../../components/SingleBlogCard/SingleBlogCard";

function Blog() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="blogpage__wrapper">
          <SingleBlogCard blogPage={true} />
          <SingleBlogCard blogPage={true} />
          <SingleBlogCard blogPage={true} />
          <SingleBlogCard blogPage={true} />
        </div>
      </div>
    </div>
  );
}

export default Blog;
