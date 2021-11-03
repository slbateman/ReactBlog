import ArticleList from "../data/ArticleList";
import { Link } from "react-router-dom";

function BlogPrevious({ index, changeArticle }) {
  let previousBlog;
  if (index < ArticleList.length) {
    let previousArticlePath = `/blog/${ArticleList[index].date}`;
    previousBlog = (
      <Link
        onClick={() => {
          changeArticle(ArticleList[index].date);
        }}
        to={previousArticlePath}
      >
        <div className="blog-previous">
          <h4>PREVIOUS</h4>
          <h5>{ArticleList[index].title}</h5>
          <h6>{ArticleList[index].date}</h6>
        </div>
      </Link>
    );
  } else {
    previousBlog = <div></div>;
  }
  return previousBlog;
}

export default BlogPrevious;
