import Form from "../../node_modules/react-bootstrap/Form";
import Button from "../../node_modules/react-bootstrap/Button";
import ContactModal from "./ContactModal";
import { useState } from "react";

function ContactForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  return (
    <div className="contact-form">
      <div className="contact-form-align">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleShow();
          }}
        >
          <Form.Group className="mb-3" controlId="emailaddress">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <ContactModal
        show={show}
        handleClose={handleClose}
        email={emailValue}
        message={messageValue}
      />
    </div>
  );
}

export default ContactForm;
