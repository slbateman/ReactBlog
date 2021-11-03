import ArticleList from "../data/ArticleList";
import Comments from "../data/Comments";
import Form from "../../node_modules/react-bootstrap/Form";
import Button from "../../node_modules/react-bootstrap/Button";

function submitComment(value, index) {
  Comments.push({
    commentID: `${ArticleList[index].articleID}"-"${ArticleList[index].articleID}`,
    replyID: "",
    articleID: ArticleList[index].articleID,
    user: "",
    comment: value,
  });
}

function BlogComments({ index }) {
  let articleComments = [];
  Comments.map((data) => {
    if (ArticleList[index].articleID === data.articleID) {
      articleComments.push([data.user, data.comment, data.reply]);
    }
  });

  return (
    <div className="blog-comments">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            <h4>COMMENTS</h4>
          </Form.Label>
          <Form.Control className="blog-comment-area" as="textarea" rows={3} />
        </Form.Group>
        <Button
          variant="dark"
          type="submit"
          onClick={() => {
            submitComment();
          }}
        >
          Submit
        </Button>
      </Form>
      <br />
      <br />
      {articleComments.map((data) => (
        <div className="comment">
        <hr/>
          <h5>{data[0]}</h5>
          {data[1]}
          <br />
          <Button
          className="reply-button"
            variant="dark"
            type="submit"
            onClick={() => {
              submitComment();
            }}
          >
            reply
          </Button>
          <br />
          <div className="comment-reply">
            {data[2].map((subData) => (
              <div>
              <hr/>
                <h5>{subData.user}</h5>
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
