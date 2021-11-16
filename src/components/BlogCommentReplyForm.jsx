import Form from "../../node_modules/react-bootstrap/Form";
import Button from "../../node_modules/react-bootstrap/Button";
import Comments from "../data/Comments";
import { useState } from "react";

function BlogCommentReplyForm({
  commentID,
  buttonCommentID,
  setButtonCommentID,
}) {
  console.log("--Blog Comment Reply Form--")
  let index = Comments.findIndex((element) => element.commentID === commentID);
  function submitReply() {
    console.log(index);
    console.log(commentID);
    console.log(buttonCommentID)
    console.log(replyValue);
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
            document.querySelector(".blog-reply-area").style.display =
              "none";
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
