import { Link } from "react-router-dom";

function BlogPrevious({ index, changeArticle, blogBase }) {

  console.log("--Blog Previous--")
  
  let previousBlog;
  if (index < blogBase.length) {
    let previousArticlePath = `/blog/${blogBase[index].date}`;
    previousBlog = (
      <Link
        onClick={() => {
          changeArticle(blogBase[index].date);
        }}
        to={previousArticlePath}
      >
        <div className="blog-previous">
          <h4>PREVIOUS</h4>
          <h5>{blogBase[index].title}</h5>
          <h6>{blogBase[index].date}</h6>
        </div>
      </Link>
    );
  } else {
    previousBlog = <div></div>;
  }
  return previousBlog;
}

export default BlogPrevious;
