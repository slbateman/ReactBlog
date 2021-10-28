import BlogArticle from "./BlogArticle";
import BlogComments from "./BlogComments";
import BlogNext from "./BlogNext";
import BlogPrevious from "./BlogPrevious";

function Blog () {
    return (
        <div class = "blog">
            <BlogPrevious />
            <BlogArticle />
            <BlogNext />
            <BlogComments />
        </div>
    )
};

export default Blog