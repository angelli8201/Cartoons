import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import FormErrors from "./FormErrors";

function SignUpModal({
  showSignUpModal,
  toggleSignUpModal,
  toggleSignInModal,
  handleSignUp,
  setUserName,
  setPassWord,
  userName,
  passWord,
  errors,
}) {
  const [showSignInLink, setShowSignInLink] = useState(false);

  const handleSignUpClick = () => {
    toggleSignUpModal();
    toggleSignInModal();
  };

  const handleSignUpAttempt = () => {
    handleSignUp(userName, passWord).then((success) => {
      if (!success) {
        setShowSignInLink(true);
      }
    });
  };

  return (
    <>
      <Modal show={showSignUpModal} onHide={toggleSignUpModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={passWord}
                onChange={(e) => setPassWord(e.target.value)}
              />
            </Form.Group>
            <FormErrors errors={errors} />
          </Form>
          {showSignInLink && (
            <p>
              Already have an account? {" "}
              <span
                style={{ cursor: "pointer", color: "blue" }}
                onClick={handleSignUpClick}
              >
                Sign In
              </span>
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleSignUpModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignUpAttempt}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUpModal;
