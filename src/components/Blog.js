import BlogArticle from "./BlogArticle";
import BlogComments from "./BlogComments";
import BlogNext from "./BlogNext";
import BlogPrevious from "./BlogPrevious";

function Blog () {
    let viewedArticleIndex = 3
    return (
        <div className = "blog">
            <BlogPrevious i = {viewedArticleIndex + 1} />
            <BlogNext i = {viewedArticleIndex - 1} />
            <BlogArticle i = {viewedArticleIndex} />
            <BlogComments i = {viewedArticleIndex} />
        </div>
    )
};

export default Blog