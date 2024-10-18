import "./blog.css";
import SingleBlogCard from "../../components/SingleBlogCard/SingleBlogCard";

import blogData from "../../../blogData.json";

function Blog() {
  return (
    <div className="container">
      <div className="blogpage__wrapper">
        {blogData.blogs.map((singleBlog, index) => (
          <SingleBlogCard
            key={index}
            blogPage={true}
            blogTitle={singleBlog.title}
            blogAuthor={singleBlog.author}
            blogImage={singleBlog.image}
            blogDesc={singleBlog.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
