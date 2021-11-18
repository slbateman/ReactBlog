import BlogComments from "./BlogComments";

function BlogArticle({ index, blogBase, userBase }) {
  console.log("--Blog Article--");
  const authorIndex = userBase.findIndex(
    (element) => element.userID === blogBase[index].userID
  );

  return (
    <div className="blog-article">
      <img
        className="blog-article-img"
        src={blogBase[index].image}
        alt={blogBase[index].imageAlt}
      />
      <h1 className="blog-article-title">{blogBase[index].title}</h1>
      <h4 className="blog-article-author">
        By: {userBase[authorIndex].fName} {userBase[authorIndex].lName}
        {" - "}
        {userBase[authorIndex].userName}{" "}
        <img
          className="avatar"
          src={userBase[authorIndex].avatar}
          alt="user avatar"
        />
      </h4>
      <h6 className="blog-article-date">Date: {blogBase[index].date}</h6>
      <div>
        {blogBase[index].body.map((data, i) => (
          <p className="blog-article-body" key={"body" + i}>
            {data}{" "}
          </p>
        ))}
      </div>
      <br />
      <BlogComments index={index} blogBase={blogBase} userBase={userBase} />
    </div>
  );
}

export default BlogArticle;
