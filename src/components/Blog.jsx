import BlogArticle from "./BlogArticle";
import BlogNext from "./BlogNext";
import BlogPrevious from "./BlogPrevious";
import { useSelector, useDispatch } from "react-redux";
import { selectArticles, updateArticleIndex } from "../store/Reducer";
import { Route, Switch, useLocation } from "react-router-dom";

function Blog() {
  console.log("--Blog--");
  const articles = useSelector(selectArticles);
  const dispatch = useDispatch();

  let location = useLocation();
  dispatch(
    updateArticleIndex(
      articles.findIndex(
        (element) => element.date === location.pathname.substr(6, 15)
      )
    )
  );

  const changeArticle = (newIndex) => {
    window.scrollTo(0, 0);
    dispatch(updateArticleIndex(newIndex));
  };

  return (
    <div className="blog">
      <Switch>
        <Route exact path="/blog">
          <BlogPrevious changeArticle={changeArticle} />
          <BlogNext changeArticle={changeArticle} />
          <BlogArticle />
        </Route>
        <Route path="/blog/">
          <BlogPrevious changeArticle={changeArticle} />
          <BlogNext changeArticle={changeArticle} />
          <BlogArticle />
        </Route>
      </Switch>
    </div>
  );
}

export default Blog;
