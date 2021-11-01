import ArticleList from "../data/ArticleList";

function BlogPrevious ({i}) {
    return (
        <div class = "blog-previous">
            <h4>Previous</h4>
            <h5>{ArticleList[i].title}</h5>
            <h6>{ArticleList[i].date}</h6>
        </div>
    )
};

export default BlogPrevious