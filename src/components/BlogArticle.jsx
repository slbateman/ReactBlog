import { useSelector } from "react-redux";
import {
  selectArticles,
  selectUsers,
  selectIndexStates,
} from "../store/Reducer";
import BlogComments from "./BlogComments";

function BlogArticle() {
  const article =
    useSelector(selectArticles)[useSelector(selectIndexStates).articleIndex];
  const author = useSelector(selectUsers).find(
    (element) => element.userID === article.userID
  );

  return (
    <div className="blog-article">
      <img
        className="blog-article-img"
        src={article.image}
        alt={article.imageAlt}
      />
      <h1 className="blog-article-title">{article.title}</h1>
      <h4 className="blog-article-author">
        By: {author.fName} {author.lName}
        {" - "}
        {author.userName}{" "}
        <img className="avatar" src={author.avatar} alt="user avatar" />
      </h4>
      <h6 className="blog-article-date">Date: {article.date}</h6>
      <div>
        {article.body.map((data, i) => (
          <p className="blog-article-body" key={"body" + i}>
            {data}{" "}
          </p>
        ))}
      </div>
      <br />
      <BlogComments />
    </div>
  );
}

export default BlogArticle;
