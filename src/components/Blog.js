import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import BlogArticle from "./BlogArticle";
import BlogComments from "./BlogComments";
import BlogNext from "./BlogNext";
import BlogPrevious from "./BlogPrevious";
import ArticleList from "../data/ArticleList";
// import ArticleList from "../data/ArticleList";

function Blog() {
  const [articlePath, setArticlePath] = useState(
    ``
  );
  // console.log(ArticleList.findIndex((element) => element.date === articlePath.substr(6,16)))
  const [articleIndex, setArticleIndex] = useState(0);

  const changeArticle = (indexChange) => {
    changePath(indexChange);
    // console.log(indexChange);
    // console.log(
    //   ArticleList.findIndex((element) => element.date === indexChange)
    // );
    setArticleIndex(
      ArticleList.findIndex((element) => element.date === indexChange)
    );
  };
  const changePath = (dateChange) => {
    // console.log("change path");
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
