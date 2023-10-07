import { useState } from "react";
import { useAuth } from "./AuthProvider";
import { Navbar, Container, Nav, Modal, Button, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/NavBar.css";
import BMo from "../images/b-mo.png"

import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

function NavBar() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const { user, signedIn, signIn, signOut, signUp, errors, setErrors } = useAuth();

  const handleSignInSuccess = (newUser) => {

    signIn(newUser);
    setShowSignInModal(false);
    resetModal();
  };

  const handleSignOut = () => {
    signOut();
    resetModal();
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
  };


  const handleSignUp = async (userName, passWord) => {
    try {
      const newUser = { userName, passWord };

      const response = await signUp(newUser);

      if (response === null) {
        toggleSignUpModal();
        toggleSignInModal();
      } else {
        console.error("User creation failed:", response);
        setErrors(["User creation failed."]);
      }
    } catch (error) {
      console.error("An error occurred during sign-up:", error);
      setErrors([error.message]);
    }
  };

  return (
    <div className="navbar-container">
      <Navbar expand="lg" bg="info" data-bs-theme="light">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <span className="navbar-title">CARTOONS</span><img src={BMo} alt="B-Mo from Adventure Time." className="navbar-logo"></img>
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
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
            <Navbar.Text>
              {signedIn ? (
                <>
                  Signed in as: {user.userName}{" "}
                  <Button
                    className="btn btn-danger custom-button-sign-out"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    className="btn btn-secondary custom-button-sign-in"
                    onClick={toggleSignInModal}
                  >
                    Sign In
                  </Button>
                  <Button
                    className="btn btn-dark custom-button-sign-up"
                    onClick={toggleSignUpModal}
                  >
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
