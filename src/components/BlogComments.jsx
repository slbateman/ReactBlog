import Comments from "../data/Comments";
import BlogCommentForm from "./BlogCommentForm";
import BlogCommentReplyForm from "./BlogCommentReplyForm";
import Button from "../../node_modules/react-bootstrap/Button";
import { useState } from "react";

function BlogComments({ index, blogBase, userBase }) {
  console.log("--Blog Comments--");

  let articleComments = [];
  Comments.map((data) => {
    const userIndex = userBase.findIndex(
      (element) => element.userID === data.userID
    );
    if (blogBase[index].articleID === data.articleID) {
      articleComments.push([
        userBase[userIndex],
        data.comment,
        data.reply,
        data.commentID,
      ]);
    }
    return articleComments;
  });

  const [buttonCommentID, setButtonCommentID] = useState("");

  return (
    <div className="blog-comments">
      <BlogCommentForm index={index} blogBase={blogBase} />
      <br />
      <br />
      {articleComments.map((data, i) => (
        <div className="comment" key={"comment" + i}>
          <hr />
          <h5>
            {data[0].userName}{" "}
            <img className="avatar" src={data[0].avatar} alt="user avatar" />
          </h5>
          {data[1]}
          <br />
          <Button
            className="reply-button"
            variant="dark"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setButtonCommentID(data[3]);
            }}
          >
            reply
          </Button>
          <div>
            <BlogCommentReplyForm
              commentID={data[3]}
              buttonCommentID={buttonCommentID}
              setButtonCommentID={setButtonCommentID}
            />
          </div>
          <br />
          <div className="comment-reply">
            {data[2].map((subData, i) => (
              <div key={"reply" + i}>
                <hr />
                <h5>
                  {
                    userBase[
                      userBase.findIndex(
                        (element) => element.userID === subData.userID
                      )
                    ].userName
                  }{" "}
                  <img
                    className="avatar"
                    src={
                      userBase[
                        userBase.findIndex(
                          (element) => element.userID === subData.userID
                        )
                      ].avatar
                    }
                    alt="user avatar"
                  />
                </h5>
                {subData.comment}
              </div>
            ))}
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default BlogComments;
