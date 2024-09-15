import SingleBlogCard from "../../components/SingleBlogCard/SingleBlogCard";

import Header from "../../components/Header/Header";

import "./singleblog.css";

function SingleBlog() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="blogsection__wrapper">
          <div className="blogfeaturesection">
            <SingleBlogCard singleBlog={true} />
          </div>
          <div className="blogcontentsection">
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              doloremque ipsa iste odio esse! Repellendus cum exercitationem quo
              dolor aliquid, maiores hic magnam, deleniti sapiente quod quis
              earum amet quas. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi doloremque ipsa iste odio esse!
              Repellendus cum exercitationem quo dolor aliquid, maiores hic
              magnam, deleniti sapiente quod quis earum amet quas. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quasi doloremque ipsa
              iste odio esse! Repellendus cum exercitationem quo dolor aliquid,
              maiores hic magnam, deleniti sapiente quod quis earum amet quas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              doloremque ipsa iste odio esse! Repellendus cum exercitationem quo
              dolor aliquid, maiores hic magnam, deleniti sapiente quod quis
              earum amet quas.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              doloremque ipsa iste odio esse! Repellendus cum exercitationem quo
              dolor aliquid, maiores hic magnam, deleniti sapiente quod quis
              earum amet quas. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi doloremque ipsa iste odio esse!
              Repellendus cum exercitationem quo dolor aliquid, maiores hic
              magnam, deleniti sapiente quod quis earum amet quas. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quasi doloremque ipsa
              iste odio esse! Repellendus cum exercitationem quo dolor aliquid,
              maiores hic magnam, deleniti sapiente quod quis earum amet quas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              doloremque ipsa iste odio esse! Repellendus cum exercitationem quo
              dolor aliquid, maiores hic magnam, deleniti sapiente quod quis
              earum amet quas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
