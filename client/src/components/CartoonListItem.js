import Card from "react-bootstrap/Card";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/CartoonListItem.css";
import PlaceHolderImage from "../images/placeholder-girl.jpg";

function CartoonListItem({ data }) {
  const [bgColor, setBgColor] = useState("black");

  const handleImageError = (e) => {
    e.target.src = PlaceHolderImage;
  };

  const handleMouseMove = (e) => {
    const y = e.clientX / window.innerWidth;
    const x = e.clientY / window.innerHeight;
    const hue = x * 360;
    const saturation = y * 100;
    const color = `hsl(${hue}, ${saturation}%, 50%)`;

    setBgColor(color);
  };

  const handleMouseLeave = () => {
    setBgColor("black");
  };

  return (
    <Card
      className="custom-list-item my-1"
      style={{ backgroundColor: bgColor }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="d-flex align-items-center">
        <div className="thumbnail-container">
          <img src={data.image} alt={data.title} onError={handleImageError} />
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
