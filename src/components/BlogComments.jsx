import Store from "../store/Store";
import BlogCommentForm from "./BlogCommentForm";
import BlogCommentReplyForm from "./BlogCommentReplyForm";
import Button from "../../node_modules/react-bootstrap/Button";
import { useState } from "react";

function BlogComments({ index }) {
  console.log("--Blog Comments--");
  const state = Store.getState();

  let articleComments = [];
  state.comments.map((data) => {
    const userIndex = state.users.findIndex(
      (element) => element.userID === state.comments[index].userID
    );
    if (state.blogs[index].articleID === data.articleID) {
      articleComments.push([
        state.users[userIndex],
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
      <BlogCommentForm index={index} />
      <br />
      <br />
      {articleComments.map((data, i) => (
        <div className="comment" key={"comment" + i}>
          <hr />
          <h5>
            {" "}
            <img
              className="avatar"
              src={data[0].avatar}
              alt="user avatar"
            />{" "}
            {data[0].userName}
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
            {data[2].map((subData, j) => (
              <div key={"commentReply" + j}>
                <hr />
                <h5>
                  <img
                    className="avatar"
                    src={
                      state.users[
                        state.users.findIndex(
                          (element) => element.userID === subData.userID
                        )
                      ].avatar
                    }
                    alt="user avatar"
                  />{" "}
                  {
                    state.users[
                      state.users.findIndex(
                        (element) => element.userID === subData.userID
                      )
                    ].userName
                  }
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
