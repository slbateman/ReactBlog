import { Form, Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router";

const NewArticle = ({ blogBase, setBlogBase, userInfo, userBase }) => {
  console.log("--New Article--");
  console.log(userBase)

  const history = useHistory()
  const articleID = blogBase[0].articleID + 1;
  const userIndex = userBase.findIndex(
    (element) => element.email === userInfo.email
  );
  console.log(userIndex)
  const author = userBase[userIndex].fName + " " + userBase[userIndex].lName
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const imageAlt = title + " " + date
  const [body, setBody] = useState("");

  const createArticle = () => {
      let newArticleArr = [{
          articleID: articleID,
          author: author,
          body: [body],
          date: date,
          image: image,
          imageAlt: imageAlt,
          title: title
      }, ...blogBase
    ];
    localStorage.setItem("blogs", JSON.stringify(newArticleArr))
    setBlogBase(JSON.parse(localStorage.getItem("blogs")))
    history.push(`/blog/${date}`)
  } 

  return (
    <div className="new-article">
      <Row className="justify-content-center">
        <Col>
          <Form onSubmit={()=> createArticle()} >
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
