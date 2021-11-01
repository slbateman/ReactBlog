import ArticleList from "../data/ArticleList";

function BlogArticle({i}) {
    
  return (
    <div className="blog-article">
      <img
        className="blog-article-img"
        src={ArticleList[i].image}
        alt={ArticleList[i].imageAlt}
      />
      <h1 className="blog-article-title">{ArticleList[i].title}</h1>
      <h4 className="blog-article-author">By: {ArticleList[i].author}</h4>
      <h6 className="blog-article-date">Date: {ArticleList[i].date}</h6>
      <div>{ArticleList[i].body.map((data) => (
      <p className="blog-article-body">{data}</p>
      ))}
      </div>
    </div>
  );
}

export default BlogArticle;
