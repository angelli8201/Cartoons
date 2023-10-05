import { useState } from "react";
import { Navbar, Container, Nav, Modal, Button, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/NavBar.css"

import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import { addUser } from "../services/userService";

function NavBar() {
  const [signedIn, setSignedIn] = useState(false);
  const [errors, setErrors] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const handleSignInSuccess = () => {
    setSignedIn(true);
    setShowSignInModal(false);
    resetModal();
  };
  
  const handleSignOut = () => {
    resetModal();
    setUser("");
    setSignedIn(false);
  };

  const toggleSignInModal = () => {
    resetModal();
    setShowSignInModal(!showSignInModal);
  };

  const toggleSignUpModal = () => {
    resetModal();
    setShowSignUpModal(!showSignUpModal);
  };

  const resetModal = () => {
    setUserName("");
    setPassWord("");
    setErrors([]);
  }

  const handleSignUp = async (userName, passWord) => {
    try {
      const newUser = { userName, passWord };
      console.log(newUser);
      const response = await addUser(newUser);
      setUser(newUser);
      toggleSignInModal()
      if (response === null) {
        toggleSignUpModal();
      } else {
        console.error("User creation failed:", response);
        setErrors(response);
      }
    } catch (error) {
      console.error("An error occurred during sign-up:", error);
      setErrors([error.message]);
    }
  };



  return (
    <div>
      <Navbar expand="lg" bg="info" data-bs-theme="light">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              Cartoons <i className="bi bi-film"></i>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/" end="true">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cartoons">
                <Nav.Link>Cartoons</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/posts">
                <Nav.Link>Posts</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/memes">
                <Nav.Link>Memes</Nav.Link>
              </LinkContainer>
            </Nav>
            <Navbar.Text>
              {signedIn ? (
                <>
                  Signed in as: {user.userName}{" "}
                  <Button className="btn btn-danger custom-button-sign-out" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button className="btn btn-secondary custom-button-sign-in" onClick={toggleSignInModal}>
                    Sign In
                  </Button>
                  <Button className="btn btn-dark custom-button-sign-up" onClick={toggleSignUpModal}>
                    Sign Up
                  </Button>
                </>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <SignInModal
        showSignInModal={showSignInModal}
        toggleSignInModal={toggleSignInModal}
        toggleSignUpModal={toggleSignUpModal}
        setUserName={setUserName}
        setPassWord={setPassWord}
        setUser={setUser}
        user={user}
        userName={userName}
        passWord={passWord}
        handleSignInSuccess={handleSignInSuccess}
        setErrors={setErrors}
        errors={errors}
      />
      <SignUpModal
        showSignUpModal={showSignUpModal}
        toggleSignUpModal={toggleSignUpModal}
        toggleSignInModal={toggleSignInModal}
        setUserName={setUserName}
        setPassWord={setPassWord}
        userName={userName}
        passWord={passWord}
        handleSignUp={handleSignUp}
        errors={errors}
      />
    </div>
  );
}

export default NavBar;
