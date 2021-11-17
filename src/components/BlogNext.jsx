import Store from "../store/Store";
import ToTopButton from "./ToTopButton";
import { Link } from "react-router-dom";

function BlogNext({ index, changeArticle }) {
  console.log("--Blog Next--");
  const state = Store.getState();

  let nextBlog;
  if (index >= 0) {
    let nextArticlePath = `/blog/${state.blogs[index].date}`;
    nextBlog = (
      <Link
        onClick={() => {
          changeArticle(state.blogs[index].date);
        }}
        to={nextArticlePath}
      >
        <div className="blog-next">
          <h4>NEXT</h4>
          <h5>{state.blogs[index].title}</h5>
          <h6>{state.blogs[index].date}</h6>
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
