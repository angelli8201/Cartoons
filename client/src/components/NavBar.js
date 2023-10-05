import React, { useState } from "react";
import { Navbar, Container, Nav, Modal, Button, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import SignInModal from "./SignInModal";

function NavBar() {
  const [signedIn, setSignedIn] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [userName, setUserName] = useState("");

  const handleSignIn = () => {
    setSignedIn(true);
    setShowSignInModal(false);
  };

  const handleSignOut = () => {
    setUserName("");
    setSignedIn(false);
  };

  const toggleSignInModal = () => {
    console.log("Toggle modal");
    setShowSignInModal(!showSignInModal);
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
            </Nav>
            <Navbar.Text>
              {signedIn ? (
                <>
                  Signed in as: {userName}{" "}
                  <Button variant="link" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button variant="link" onClick={toggleSignInModal}>
                  Sign In
                </Button>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <SignInModal
        showSignInModal={showSignInModal}
        toggleSignInModal={toggleSignInModal}
        setUserName={setUserName}
        handleSignIn={handleSignIn}
      />
    </div>
  );
}

export default NavBar;
