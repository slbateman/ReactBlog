import { useSelector } from "react-redux";
import { selectArticles, selectIndexStates } from "../store/Reducer";
import ToTopButton from "./ToTopButton";
import { Link } from "react-router-dom";

function BlogNext({ changeArticle }) {
  const articles = useSelector(selectArticles);
  const nextIndex = useSelector(selectIndexStates).articleIndex - 1;

  let nextBlog;
  if (nextIndex >= 0) {
    let nextArticlePath = `/blog/${articles[nextIndex].date}`;
    nextBlog = (
      <Link
        onClick={() => {
          changeArticle(nextIndex);
        }}
        to={nextArticlePath}
      >
        <div className="blog-next">
          <h4>NEXT</h4>
          <h5>{articles[nextIndex].title}</h5>
          <h6>{articles[nextIndex].date}</h6>
        </div>
      </Link>
    );
  } else {
    nextBlog = <div></div>;
  }
  return (
    <div>
      {nextBlog}
      <ToTopButton />
    </div>
  );
}

export default BlogNext;
