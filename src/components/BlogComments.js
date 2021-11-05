import ArticleList from "../data/ArticleList";
import Comments from "../data/Comments";
import BlogCommentForm from "./BlogCommentForm";
import BlogCommentReplyForm from "./BlockCommentReplyForm";
import Button from "../../node_modules/react-bootstrap/Button";
import { useState } from "react";

function BlogComments({ index }) {
  // const [hiddenState, setHiddenState] = useState({display: 'none'})

  let articleComments = [];
  Comments.map((data) => {
    if (ArticleList[index].articleID === data.articleID) {
      articleComments.push([data.user, data.comment, data.reply, data.commentID]);
    }
    return articleComments;
  });

  const [buttonCommentID, setButtonCommentID] = useState("")

  return (
    <div className="blog-comments">
      <BlogCommentForm index={index} />
      <br />
      <br />
      {articleComments.map((data, i) => (
        <div className="comment">
          <hr />
          <h5>{data[0]}</h5>
          {data[1]}
          <br />
          <Button
            className="reply-button"
            variant="dark"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setButtonCommentID(data[3])
            }}
          >
            reply
          </Button>
          <div>
            <BlogCommentReplyForm commentID={data[3]} i={i} buttonCommentID={buttonCommentID} />
          </div>
          <br />
          <div className="comment-reply">
            {data[2].map((subData) => (
              <div>
                <hr />
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
