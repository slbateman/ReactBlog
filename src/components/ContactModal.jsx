import Modal from "../../node_modules/react-bootstrap/Modal";
import Button from "../../node_modules/react-bootstrap/Button";

function ContactModal({show, handleClose, email, message}) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>Thank you for your message.</h5>
            <br />
            <p>Your email address: {email} </p>
            <p>Your message: {message} </p>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactModal;
