import { Route, Switch, useLocation } from "react-router-dom";
import { useState } from "react";
import BlogArticle from "./BlogArticle";
import BlogNext from "./BlogNext";
import BlogPrevious from "./BlogPrevious";

function Blog({ blogBase, userBase }) {

  console.log("--Blog--")

  let location = useLocation();
  const [articleIndex, setArticleIndex] = useState(
    blogBase.findIndex(
      (element) => element.date === location.pathname.substr(6, 15)
    )
  );

  const changeArticle = (dateChange) => {
    window.scrollTo(0, 0);
    setArticleIndex(
      blogBase.findIndex((element) => element.date === dateChange)
    );
  };

  return (
    <div className="blog">
      <Switch>
        <Route exact path="/blog">
          <BlogPrevious index={1} changeArticle={changeArticle} blogBase={blogBase} />
          <BlogNext index={-1} changeArticle={changeArticle} blogBase={blogBase} />
          <BlogArticle index={0} blogBase={blogBase} userBase={userBase} />
        </Route>
        <Route path="/blog/">
          <BlogPrevious
            index={articleIndex + 1}
            changeArticle={changeArticle}
            blogBase={blogBase}
          />
          <BlogNext
            index={articleIndex - 1}
            changeArticle={changeArticle}
            blogBase={blogBase}
          />
          <BlogArticle index={articleIndex} blogBase={blogBase} userBase={userBase} />
        </Route>
      </Switch>
    </div>
  );
}

export default Blog;
