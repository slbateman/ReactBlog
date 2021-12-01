import { Form, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectArticles, selectUserInfo, selectUsers, updateArticles } from "../store/Reducer";

const NewArticle = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const users = useSelector(selectUsers);
  const user = users.find((e) => e.userID === userInfo.userID)
  const articles = useSelector(selectArticles);


  const history = useHistory();
  const articleID = articles[0].articleID + 1;
  const author = user.fName + " " + user.lName;
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const imageAlt = title + " " + date;
  const [body, setBody] = useState("");

  const createArticle = () => {
    let newArticle = {
        articleID: articleID,
        userID: user.userID,
        body: [body],
        date: date,
        image: image,
        imageAlt: imageAlt,
        title: title,
      }
      dispatch(updateArticles(newArticle))
    history.push(`/blog/${date}`);
  };

  return (
    <div className="new-article">
      <Row className="justify-content-center">
        <Col>
          <Form onSubmit={() => createArticle()}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label htmlFor="inlineFormInputGroup">Title</Form.Label>
                  <Form.Control
                    id="inlineFormInputGroup"
                    placeholder="Article Title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    placeholder="YYYY-MM-DD"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Author's Name</Form.Label>
                  <Form.Control
                    placeholder="John Doe"
                    value={author}
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col></Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image Address</Form.Label>
              <Form.Control
                placeholder="Image Address"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Article Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Form.Group>
            <br />
            <Button className="m-1" type="submit">
              Submit Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default NewArticle;
