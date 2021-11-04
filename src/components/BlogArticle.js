import ArticleList from "../data/ArticleList";
import BlogComments from "./BlogComments";

function BlogArticle({index}) {
  
  return (
    <div className="blog-article">
      <img
        className="blog-article-img"
        src={ArticleList[index].image}
        alt={ArticleList[index].imageAlt}
      />
      <h1 className="blog-article-title">{ArticleList[index].title}</h1>
      <h4 className="blog-article-author">By: {ArticleList[index].author}</h4>
      <h6 className="blog-article-date">Date: {ArticleList[index].date}</h6>
      <div>{ArticleList[index].body.map((data) => (
      <p className="blog-article-body">{data} </p>
      ))}
      </div>
      <br />
      <BlogComments index={index} />
    </div>
  );
}

export default BlogArticle;
