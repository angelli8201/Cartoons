import { useState, useEffect } from "react";
import { findAllUsers } from "../services/userService";
import { Modal, Button, Form } from "react-bootstrap";
import FormErrors from "./FormErrors";

export default function SignInModal({
  showSignInModal,
  toggleSignInModal,
  toggleSignUpModal,
  setUserName,
  setPassWord,
  setUser,
  user,
  userName,
  passWord,
  handleSignInSuccess,
  errors,
  setErrors,
}) {
  const [users, setUsers] = useState([]);
  const [showSignUpLink, setShowSignUpLink] = useState(false);

  const handleSignIn = () => {
    const user = users.find((user) => {
      if (user.userName === userName && user.passWord === passWord) {
        setUser(user);
        return user;
      } else return null;
    });

    if (user) {
      handleSignInSuccess(user);
      toggleSignInModal();
    } else {
      setErrors(["Username and/or Password do not match."]);
      setShowSignUpLink(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allUsers = await findAllUsers();
        setUsers(allUsers);
        console.log(allUsers);
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
                type="password"
                onChange={(e) => setPassWord(e.target.value)}
              />
            </Form.Group>
            <FormErrors errors={errors} />
          </Form>
          {showSignUpLink && (
            <p>
              Don't have an account? {" "}
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
