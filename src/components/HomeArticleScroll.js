import ArticleList from "../data/ArticleList";
import { Link } from "react-router-dom";

function getArticles() {
  return (
    <div>
      {ArticleList.map((data) => (
        <Link to={`/blog/${data.date}` } >
          <div className="blog-preview" >
            <div>
              <img
                className="preview-image"
                src={data.image}
                alt={data.imageAlt}
              />
            </div>
            <div className="preview-text">
              <div className="preview-title">{data.title.substr(0, 28)}</div>
              <div className="preview-author-date">
                <div className="preview-author">{data.author}</div>
                <div className="preview-date">{data.date}</div>
              </div>
              <div className="preview-body">
                {data.body[0].substr(0, 115)}...
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function HomeArticleScroll() {
  return <div className="home-article-scroll">{getArticles()}</div>;
}

export default HomeArticleScroll;
