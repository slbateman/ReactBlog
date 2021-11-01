import ArticleList from "../data/ArticleList";

function BlogNext ({i}) {
    return (
        <div class = "blog-next">
            <h4>Next</h4>
            <h5>{ArticleList[i].title}</h5>
            <h6>{ArticleList[i].date}</h6>
        </div>
    )
};

export default BlogNext