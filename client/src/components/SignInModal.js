import { Modal, Button, Form } from "react-bootstrap";

export default function SignInModal({
  showSignInModal,
  toggleSignInModal,
  setUserName,
  handleSignIn,
}) {
  return (
    <>
      <Modal show={showSignInModal} onHide={toggleSignInModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleSignInModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignIn}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
