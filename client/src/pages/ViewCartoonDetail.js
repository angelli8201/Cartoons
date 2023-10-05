import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataTwoD from "../data/cartoons2D.json";
import PlaceHolderImage from "../images/placeholder-girl.jpg";

import "../styles/ViewCartoonDetail.css"

export default function ViewCartoonDetail() {
  const { cartoonId } = useParams();
  const [cartoon, setCartoon] = useState();

  const handleImageError = (e) => {
    e.target.src = PlaceHolderImage;
  };

  // TODO: Create useEffect to fetch API data on page load
  useEffect(() => {
    if (cartoonId) {
      console.log(cartoonId);
      setCartoon(DataTwoD.find((item) => item.id === parseInt(cartoonId)));
    
    }
  }, [cartoonId]);

  if (!cartoon) {
    return <div>Cartoon not found</div>;
  }

  return (
    <div className="cartoon-container mt-4">
      <h1>{cartoon.title}</h1>
      <p>Year: {cartoon.year}</p>
      <p>Creator: {cartoon.creator.join(", ")}</p>
      <p>Rating: {cartoon.rating}</p>
      <p>Genre: {cartoon.genre.join(", ")}</p>
      <p>Runtime: {cartoon.runtime_in_minutes} minutes</p>
      <p>Episodes: {cartoon.episodes}</p>
      <img src={cartoon.image} alt={cartoon.title} onError={handleImageError} />
    </div>
  );
}
