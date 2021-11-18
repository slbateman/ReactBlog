import Store from "../store/Store";
import { Route, Switch, useLocation } from "react-router-dom";
import { useState } from "react";
import BlogArticle from "./BlogArticle";
import BlogNext from "./BlogNext";
import BlogPrevious from "./BlogPrevious";

function Blog({ blogBase }) {
  console.log("--Blog--");
  const state = Store.getState();

  let location = useLocation();
  const [articleIndex, setArticleIndex] = useState(
    state.blogs.findIndex(
      (element) => element.date === location.pathname.substr(6, 15)
    )
  );

  const changeArticle = (dateChange) => {
    window.scrollTo(0, 0);
    setArticleIndex(
      state.blogs.findIndex((element) => element.date === dateChange)
    );
  };

  return (
    <div className="blog">
      <Switch>
        <Route exact path="/blog">
          <BlogPrevious
            index={1}
            changeArticle={changeArticle}
            blogBase={blogBase}
          />
          <BlogNext
            index={-1}
            changeArticle={changeArticle}
          />
          <BlogArticle index={0} />
        </Route>
        <Route path="/blog/">
          <BlogPrevious
            index={articleIndex + 1}
            changeArticle={changeArticle}
          />
          <BlogNext
            index={articleIndex - 1}
            changeArticle={changeArticle}
          />
          <BlogArticle index={articleIndex} />
        </Route>
      </Switch>
    </div>
  );
}

export default Blog;
