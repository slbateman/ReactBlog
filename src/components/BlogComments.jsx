import BlogCommentForm from "./BlogCommentForm";
import BlogCommentReplyForm from "./BlogCommentReplyForm";
import Button from "../../node_modules/react-bootstrap/Button";
import { useSelector } from "react-redux";
import {
  selectUsers,
  selectArticles,
  selectComments,
  selectIndexStates,
} from "../store/Reducer";
import { useState } from "react";

function BlogComments() {
  const index = useSelector(selectIndexStates).articleIndex;
  const articles = useSelector(selectArticles);
  const article =
    useSelector(selectArticles)[useSelector(selectIndexStates).articleIndex];
  const comments = useSelector(selectComments);
  const users = useSelector(selectUsers);

  let articleComments = [];
  comments.map((data) => {
    const userIndex = users.findIndex(
      (element) => element.userID === data.userID
    );
    if (article.articleID === data.articleID) {
      articleComments.push([
        users[userIndex],
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
      <BlogCommentForm index={index} blogBase={articles} />
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
                    users[
                      users.findIndex(
                        (element) => element.userID === subData.userID
                      )
                    ].userName
                  }{" "}
                  <img
                    className="avatar"
                    src={
                      users[
                        users.findIndex(
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
