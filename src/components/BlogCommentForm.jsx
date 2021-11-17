import Store from "../store/Store";
import Form from "../../node_modules/react-bootstrap/Form";
import Button from "../../node_modules/react-bootstrap/Button";
import { useState } from "react";

function BlogCommentForm({ index }) {
  console.log("--Blog Comment Form--");
  const state = Store.getState();

  function submitComment() {
    console.log(state.blogs[index].articleID);
    console.log(commentValue);
    setCommentValue("");
  }

  const [commentValue, setCommentValue] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submitComment();
      }}
    >
      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>
          <h4>COMMENTS</h4>
        </Form.Label>
        <Form.Control
          className="blog-comment-area"
          as="textarea"
          rows={3}
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
        />
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BlogCommentForm;
