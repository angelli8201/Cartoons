import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

import "../styles/CartoonListItem.css";
import PlaceHolderImage from "../images/placeholder-girl.jpg";

function CartoonListItem({ data }) {
  const handleImageError = (e) => {
    e.target.src = PlaceHolderImage;
  };

  return (
    <ListGroup.Item
      className="d-flex align-items-center custom-hover custom-list-item my-1"
    >
      <div
        className="mr-3 thumbnail-container"
      >
        <img
          src={data.image}
          alt={data.title}
          onError={handleImageError}
        />
      </div>
      <div className="flex-grow-1">
        <h5 className="mb-0 text-center">{data.title}</h5>
      </div>
      <div>
        <Link
          className="btn btn-success mx-1"
          to={`/cartoons/detail/${data.id}`}
        >
          <i className="bi bi-info-square"></i><span className="detail-btn-text"></span>
        </Link>
      </div>
    </ListGroup.Item>
  );
}

export default CartoonListItem;
