import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import BlogArticle from "./BlogArticle";
import BlogNext from "./BlogNext";
import BlogPrevious from "./BlogPrevious";
import ArticleList from "../data/ArticleList";
import { useLocation } from "react-router-dom";

function Blog() {
  let location = useLocation();
  const [articleIndex, setArticleIndex] = useState(
    ArticleList.findIndex(
      (element) => element.date === location.pathname.substr(6, 15)
    )
  );

  const changeArticle = (dateChange) => {
    window.scrollTo(0, 0);
    setArticleIndex(
      ArticleList.findIndex((element) => element.date === dateChange)
    );
  };

  return (
    <div className="blog">
      <Switch>
        <Route exact path="/blog">
          <BlogPrevious index={1} changeArticle={changeArticle} />
          <BlogNext index={-1} changeArticle={changeArticle} />
          <BlogArticle index={0} />
        </Route>
        <Route path="/blog/">
          <BlogPrevious
            index={articleIndex + 1}
            changeArticle={changeArticle}
          />
          <BlogNext index={articleIndex - 1} changeArticle={changeArticle} />
          <BlogArticle index={articleIndex} />
        </Route>
      </Switch>
    </div>
  );
}

export default Blog;
