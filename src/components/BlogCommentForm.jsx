import Form from "../../node_modules/react-bootstrap/Form";
import Button from "../../node_modules/react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserInfo,
  selectArticles,
  selectComments,
  selectIndexStates,
  updateComments,
} from "../store/Reducer";
import { useHistory } from "react-router";
import { useState } from "react";

function BlogCommentForm() {
  const userInfo = useSelector(selectUserInfo);
  const article =
    useSelector(selectArticles)[useSelector(selectIndexStates).articleIndex];
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();
  const [commentValue, setCommentValue] = useState("");
  const history = useHistory()

  function submitComment() {
    if (userInfo.loggedIn) {
      const newComment = {
        commentID: comments[comments.length - 1].commentID + 1,
        reply: [],
        articleID: article.articleID,
        userID: userInfo.userID,
        comment: commentValue,
      };
      dispatch(updateComments(newComment));
      setCommentValue("");
    } else {
      history.push("/login")
    }
  }

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
