import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "../styles/CartoonListItem.css";
import PlaceHolderImage from "../images/placeholder-girl.jpg";

function CartoonListItem({ data }) {
  const handleImageError = (e) => {
    e.target.src = PlaceHolderImage;
  };

  return (
    <Card className="custom-list-item my-1">
      <div className="d-flex align-items-center">
        <div className="thumbnail-container">
          <img
            src={data.image}
            alt={data.title}
            onError={handleImageError}
          />
        </div>
        <div className="flex-grow-1 text-center">
          <h5 className="mb-0">{data.title}</h5>
        </div>
        <div>
          <Link
            className="btn btn-success mx-1"
            to={`/cartoons/detail/${data.id}`}
          >
            <i className="bi bi-info-square"></i>
            <span className="detail-btn-text"></span>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default CartoonListItem;
