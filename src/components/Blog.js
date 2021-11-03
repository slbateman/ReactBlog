import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import BlogArticle from "./BlogArticle";
import BlogComments from "./BlogComments";
import BlogNext from "./BlogNext";
import BlogPrevious from "./BlogPrevious";
import ArticleList from "../data/ArticleList";
import { useLocation } from "react-router-dom";
// import ArticleList from "../data/ArticleList";

function Blog() {
  let location = useLocation();
  const [articlePath, setArticlePath] = useState(``);
  const [articleIndex, setArticleIndex] = useState(
    ArticleList.findIndex(
      (element) => element.date === location.pathname.substr(6, 16)
    )
  );

  const changeArticle = (dateChange) => {
    window.scrollTo(0, 0);
    changePath(dateChange);
    setArticleIndex(
      ArticleList.findIndex((element) => element.date === dateChange)
    );
  };
  const changePath = (dateChange) => {
    setArticlePath(`/blog/${dateChange}`);
  };

  return (
    <div className="blog">
      <Switch>
        <Route exact path="/blog">
          <BlogPrevious index={1} changeArticle={changeArticle} />
          <BlogNext index={-1} changeArticle={changeArticle} />
          <BlogArticle index={0} />
          <BlogComments index={0} />
        </Route>
        <Route path={articlePath}>
          <BlogPrevious
            index={articleIndex + 1}
            changeArticle={changeArticle}
          />
          <BlogNext index={articleIndex - 1} changeArticle={changeArticle} />
          <BlogArticle index={articleIndex} />
          <BlogComments index={articleIndex} />
        </Route>
      </Switch>
    </div>
  );
}

export default Blog;
