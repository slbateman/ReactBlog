import Store from "../store/Store";
import { Link } from "react-router-dom";

function BlogPrevious({ index, changeArticle }) {
  console.log("--Blog Previous--");
  const state = Store.getState();

  let previousBlog;
  if (index < state.blogs.length) {
    let previousArticlePath = `/blog/${state.blogs[index].date}`;
    previousBlog = (
      <Link
        onClick={() => {
          changeArticle(state.blogs[index].date);
        }}
        to={previousArticlePath}
      >
        <div className="blog-previous">
          <h4>PREVIOUS</h4>
          <h5>{state.blogs[index].title}</h5>
          <h6>{state.blogs[index].date}</h6>
        </div>
      </Link>
    );
  } else {
    previousBlog = <div></div>;
  }
  return previousBlog;
}

export default BlogPrevious;
