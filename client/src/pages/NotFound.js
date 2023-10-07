import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {Col, Row} from "react-bootstrap";

import "../styles/NotFound.css"

function NotFound() {
  const navigate = useNavigate();
  const [redirectCount, setRedirectCount] = useState(7);

  const decreaseTimer = () => {
    if (redirectCount > 0) {
      setRedirectCount(redirectCount - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(decreaseTimer, 1000);

    if (redirectCount === 0) {
      clearInterval(timer);
      navigate("/");
    }

    return () => clearInterval(timer);
  }, [navigate, redirectCount]);

  return (
    <section aria-describedby="web-application error: 404 page, gif of Homer Simpson retreating into some bushes">
      <Row className="not-found-container mt-4">
        <Col className="container-fluid not-found-background py-2 px-4">
          <div
            className="row my-1 d-flex justify-content-start align-items-start h-100 text-align-right"
            aria-label="gif of Homer Simpson retreating into some bushes"
          >
            <div className="col-lg-5 text-white text-background p-2 text-align-center">
              <h1 className="text-center">
                D'oh!<br></br>
                404: Not Found</h1>
              <p className="text-center">
                 We can't seem to find Homer.
              </p>
              <p className="text-center">Meet you at 742 Evergreen Terrace in <span className="redirect-count"><strong>{redirectCount}</strong></span> </p>
              <Link to={"/"} className="btn btn-warning btn-block w-100">
              Go Home <i className="bi bi-house-up"></i>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default NotFound;
