import { Route, Switch } from "react-router-dom";
import { useState } from 'react';
import BlogArticle from "./BlogArticle";
import BlogComments from "./BlogComments";
import BlogNext from "./BlogNext";
import BlogPrevious from "./BlogPrevious";
import ArticleList from "../data/ArticleList";



function Blog() {
  const [articleIndex, setArticleIndex] = useState(0);
  const [articlePath, setArticlePath] = useState(`/blog/${ArticleList[articleIndex].date}`);
  
  const changeArticle = (indexChange) => {
    console.log(indexChange)
    setArticleIndex(articleIndex + indexChange);
    changePath();
  };
const changePath = () => {
  setArticlePath(`/blog/${ArticleList[articleIndex].date}`);
}

  return (
    <div className="blog">
      <Switch>
        <Route exact path="/blog">
            <BlogPrevious index={articleIndex + 1} changeArticle={changeArticle} />
            <BlogNext index={articleIndex - 1} changeArticle={changeArticle} />
          <BlogArticle index={articleIndex} />
          <BlogComments index={articleIndex} />
        </Route>
        <Route path={articlePath}>
            <BlogPrevious index={articleIndex + 1} changeArticle={changeArticle} />
            <BlogNext index={articleIndex - 1} changeArticle={changeArticle} />
          <BlogArticle index={articleIndex} />
          <BlogComments index={articleIndex} />
        </Route>
      </Switch>
    </div>
  );
}

export default Blog;
