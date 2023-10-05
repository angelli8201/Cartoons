import { useEffect, useState } from "react";
import { cartoonApi2D } from "../services/cartoonApi2D";
import FormErrors from "./FormErrors";

import CartoonListItem from "./CartoonListItem";
import DataTwoD from "../data/cartoons2D.json";
import DataThreeD from "../data/cartoons3D.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Spinner } from "react-bootstrap";

export default function CartoonList() {
  // TODO: Create useEffect from cartoonApi service import real data

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  const cartoonData = DataTwoD;

  useEffect(() => {

    setData(cartoonData);
    setLoading(false);

    // cartoonApi2D()
    //   .then((data) => {
    //     setData(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     setErrors(error);
    //     setLoading(false);
    //   });
  }, []);

  if (!data) {
  } else {
  }

  return (
    <>
      <Row>
        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "87vh", color: "cyan" }}
          >
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : data.length === 0 ? (
          <div className="alert alert-warning py-4">No cartoons found.</div>
        ) : (
          data.map((cartoon) => (
            <Col key={cartoon.id} sm={12}>
              <CartoonListItem data={cartoon} />
            </Col>
          ))
        )}
        <FormErrors error={errors} />
      </Row>
    </>
  );
}
