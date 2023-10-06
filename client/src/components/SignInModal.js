import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import FormErrors from "./FormErrors";
import { useAuth } from "./AuthProvider";
import { findAllUsers } from "../services/userService";

export default function SignInModal({
  showSignInModal,
  toggleSignInModal,
  toggleSignUpModal,
  handleSignInSuccess,
  setUserName,
  setPassWord,
  userName,
  passWord,
  errors,
  setErrors,
}) {
  const { user } = useAuth();
  const [showSignUpLink, setShowSignUpLink] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSignIn = async () => {
    try {
      const newUser = users.find(
        (user) => user.passWord === passWord && user.userName === userName
      )

      if (newUser) {
        handleSignInSuccess(newUser);
        toggleSignInModal();
      } else {
        setErrors(["Username and/or Password do not match."]);
        setShowSignUpLink(true);
      }
    } catch (error) {
      console.error("An error occurred during sign-in:", error);
      setErrors([error.message]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allUsers = await findAllUsers();
        setUsers(allUsers);
      } catch (error) {
        console.error("An error occurred while fetching users:", error);
        setErrors(error);
      }
    };

    fetchData();
  }, [user]);

  const handleSignUpClick = () => {
    toggleSignInModal();
    toggleSignUpModal();
  };

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
              <Form.Control
                type="passWord"
                onChange={(e) => setPassWord(e.target.value)}
              />
            </Form.Group>
            <FormErrors errors={errors} />
          </Form>
          {showSignUpLink && (
            <p>
              Don't have an account?{" "}
              <span
                style={{ cursor: "pointer", color: "blue" }}
                onClick={handleSignUpClick}
              >
                Sign Up
              </span>{" "}
            </p>
          )}
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
