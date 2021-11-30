import Form from "../../node_modules/react-bootstrap/Form";
import Button from "../../node_modules/react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  selectUserInfo,
  selectComments,
  updateReplies,
} from "../store/Reducer";

function BlogCommentReplyForm({
  commentID,
  buttonCommentID,
  setButtonCommentID,
}) {
  console.log("--Blog Comment Reply Form--");
  const comments = useSelector(selectComments);
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const index = comments.findIndex(
    (element) => element.commentID === commentID
  );
  const comment = comments[index];
  let replyID;
  comment.reply[0]
    ? (replyID = comment.reply[comment.reply.length - 1].replyID + 1)
    : (replyID = 1);
  function submitReply() {
    const newReply = {
      commentIndex: index,
      reply: {
        replyID: replyID,
        userID: userInfo.userID,
        comment: replyValue,
      },
    };
    dispatch(updateReplies(newReply));
    setReplyValue("");
    document.querySelector(".blog-reply-area").style.display = "none";
    setButtonCommentID("");
  }

  const [replyValue, setReplyValue] = useState("");

  return (
    <div
      className="blog-reply-area"
      id={commentID}
      style={
        commentID === buttonCommentID
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          submitReply();
        }}
      >
        <Form.Group className="mb-3" controlId="reply">
          <Form.Control
            as="textarea"
            rows={3}
            value={replyValue}
            onChange={(e) => setReplyValue(e.target.value)}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
        <span> </span>
        <Button
          variant="dark"
          type="button"
          onClick={() => {
            document.querySelector(".blog-reply-area").style.display = "none";
            setButtonCommentID("");
          }}
        >
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default BlogCommentReplyForm;
