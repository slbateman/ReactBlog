import ArticleList from "../data/ArticleList";
import { Link } from "react-router-dom";

function BlogNext({ index, changeArticle }) {
  // window.onscroll = function () {
  //   scrollFunction();
  // };
  // function scrollFunction(e) {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     e.style.display = "block";
  //   } else {
  //     e.style.display = "none";
  //   }
  // }

  let nextBlog;
  if (index >= 0) {
    let nextArticlePath = `/blog/${ArticleList[index].date}`;
    nextBlog = (
      <Link
        onClick={() => changeArticle(ArticleList[index].date)}
        to={nextArticlePath}
      >
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
  return (
    <div>
      {nextBlog}
      <button
        className="top-button"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        onScroll={(e) => {
          if (window.scrollTop > 300) {
            e.target.style.display = "block";
          } else {
            e.target.style.display = "none";
          }
        }}
      >
        ^
      </button>
    </div>
  );
}

export default BlogNext;
