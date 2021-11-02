import ArticleList from "../data/ArticleList";
import { Link } from "react-router-dom";

function BlogNext({ index, changeArticle }) {
  let nextBlog;
  if (index >= 0) {
    let nextArticlePath = `/blog/${ArticleList[index].date}`;
    nextBlog = (
      <Link onClick={() => changeArticle(-1) } to={nextArticlePath} >
        <div className="blog-next">
          <h4>NEXT</h4>
          <h5>{ArticleList[index].title}</h5>
          <h6>{ArticleList[index].date}</h6>
        </div>
      </Link>
    );
  } else {
    nextBlog = <div></div>;
  }
  return nextBlog;
}

export default BlogNext;
