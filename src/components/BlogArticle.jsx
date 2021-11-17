import Store from "../store/Store";
import BlogComments from "./BlogComments";

function BlogArticle({ index }) {
  console.log("--Blog Article--");
  const state = Store.getState();

  return (
    <div className="blog-article">
      <img
        className="blog-article-img"
        src={state.blogs[index].image}
        alt={state.blogs[index].imageAlt}
      />
      <h1 className="blog-article-title">{state.blogs[index].title}</h1>
      <h4 className="blog-article-author">By: {state.blogs[index].author}</h4>
      <h6 className="blog-article-date">Date: {state.blogs[index].date}</h6>
      <div>
        {state.blogs[index].body.map((data, i) => (
          <p className="blog-article-body" key={"body" + i}>
            {data}{" "}
          </p>
        ))}
      </div>
      <br />
      <BlogComments index={index} />
    </div>
  );
}

export default BlogArticle;
