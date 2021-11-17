import Store from "../store/Store";
import { Link } from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";

function HomeArticleScroll() {
  console.log("--Home Article Scroll--");
  const state = Store.getState();

  return (
    <div className="home-article-scroll">
      {state.blogs.map((data, i) => (
        <Container fluid key={"scroll" + i}>
          <Link to={`/blog/${data.date}`}>
            <div className="blog-preview">
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
        </Container>
      ))}
    </div>
  );
}

export default HomeArticleScroll;
