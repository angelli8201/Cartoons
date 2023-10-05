import CartoonListItem from "./CartoonListItem";
import DataTwoD from "../data/cartoons2D.json";
import DataThreeD from "../data/cartoons3D.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function CartoonList() {
  // TODO: Create useEffect from cartoonApi service import real data
  const data = DataTwoD;

  return (
    <>
      <Row>
        {data.map((cartoon, index) => (
          <Col key={cartoon.id} xxl={4} lg ={6} md={12} >
            <CartoonListItem data={cartoon} />
          </Col>
        ))}
      </Row>
    </>
  );
}


