import { useSelector } from "react-redux";
import { selectArticles, selectIndexStates } from "../store/Reducer";
import { Link } from "react-router-dom";

function BlogPrevious({ changeArticle }) {

  console.log("--Blog Previous--")
  const articles = useSelector(selectArticles);
  const prevIndex = useSelector(selectIndexStates).articleIndex + 1;
  
  let previousBlog;
  if (prevIndex < articles.length) {
    let previousArticlePath = `/blog/${articles[prevIndex].date}`;
    previousBlog = (
      <Link
        onClick={() => {
          changeArticle(prevIndex);
        }}
        to={previousArticlePath}
      >
        <div className="blog-previous">
          <h4>PREVIOUS</h4>
          <h5>{articles[prevIndex].title}</h5>
          <h6>{articles[prevIndex].date}</h6>
        </div>
      </Link>
    );
  } else {
    previousBlog = <div></div>;
  }
  return previousBlog;
}

export default BlogPrevious;
