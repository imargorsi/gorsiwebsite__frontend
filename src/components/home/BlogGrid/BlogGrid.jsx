import "./bloggrid.css";

import SingleBlogCard from "../../SingleBlogCard/SingleBlogCard";

function BlogGrid() {
  return (
    <div className="container">
      <div className="blogs__grid">
        <div className="grid_1">
          <h2 className="heading__h2">Latest Articles and Writings</h2>
          <hr className="bloghr" />
          <SingleBlogCard />
        </div>
        <div className="grid_2">
          <SingleBlogCard small={true} />
          <SingleBlogCard small={true} />
          <SingleBlogCard small={true} />
        </div>
      </div>
    </div>
  );
}

export default BlogGrid;
