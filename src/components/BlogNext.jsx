import ToTopButton from "./ToTopButton";
import { Link } from "react-router-dom";

function BlogNext({ index, changeArticle, blogBase }) {

  console.log("--Blog Next--")
  

  let nextBlog;
  if (index >= 0) {
    let nextArticlePath = `/blog/${blogBase[index].date}`;
    nextBlog = (
      <Link
        onClick={() => {
          changeArticle(blogBase[index].date);
        }}
        to={nextArticlePath}
      >
        <div className="blog-next">
          <h4>NEXT</h4>
          <h5>{blogBase[index].title}</h5>
          <h6>{blogBase[index].date}</h6>
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
