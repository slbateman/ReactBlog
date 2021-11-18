import BlogComments from "./BlogComments";

function BlogArticle({ index, blogBase }) {

  console.log("--Blog Article--")
  
  return (
    <div className="blog-article">
      <img
        className="blog-article-img"
        src={blogBase[index].image}
        alt={blogBase[index].imageAlt}
      />
      <h1 className="blog-article-title">{blogBase[index].title}</h1>
      <h4 className="blog-article-author">By: {blogBase[index].author}</h4>
      <h6 className="blog-article-date">Date: {blogBase[index].date}</h6>
      <div>
        {blogBase[index].body.map((data, i) => (
          <p className="blog-article-body" key={"body" + i}>
            {data}{" "}
          </p>
        ))}
      </div>
      <br />
      <BlogComments index={index} blogBase={blogBase} />
    </div>
  );
}

export default BlogArticle;
