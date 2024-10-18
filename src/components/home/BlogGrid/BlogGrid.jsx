import "./bloggrid.css";

import SingleBlogCard from "../../SingleBlogCard/SingleBlogCard";

import blogData from "../../../../blogData.json";

function BlogGrid() {
  return (
    <div className="container">
      <div className="blogs__grid">
        <div className="grid_1">
          <h2 className="heading__h2">Latest Articles and Writings</h2>
          <hr className="bloghr" />
          <SingleBlogCard
            key={blogData.blogs[0].title}
            blogTitle={blogData.blogs[0].title}
            blogAuthor={blogData.blogs[0].author}
            blogImage={blogData.blogs[0].image}
            blogDesc={blogData.blogs[0].desc}
          />
        </div>
        <div className="grid_2">
          <SingleBlogCard
            key={blogData.blogs[1].title}
            blogTitle={blogData.blogs[1].title}
            blogAuthor={blogData.blogs[1].author}
            blogImage={blogData.blogs[1].image}
            blogDesc={blogData.blogs[1].desc}
            small={true}
          />
          <SingleBlogCard
            key={blogData.blogs[2].title}
            blogTitle={blogData.blogs[2].title}
            blogAuthor={blogData.blogs[2].author}
            blogImage={blogData.blogs[2].image}
            blogDesc={blogData.blogs[2].desc}
            small={true}
          />
          <SingleBlogCard
            key={blogData.blogs[3].title}
            blogTitle={blogData.blogs[3].title}
            blogAuthor={blogData.blogs[3].author}
            blogImage={blogData.blogs[3].image}
            blogDesc={blogData.blogs[3].desc}
            small={true}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogGrid;
