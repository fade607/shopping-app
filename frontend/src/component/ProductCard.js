import React from "react";
import "../css/productCard.css";
import StarIcon from "@material-ui/icons/Star";
import Stars from "../component/Stars";
import { Link } from "react-router-dom";
function ProductCard({ product }) {
  const { id, rating, description, name, image, brand, price, numReview } =
    product;

  return (
    <div className="productCard">
      <Link to={`/${id}`}>
        <img src={image} alt={name} />
        <div className="datiles">
          <h3>{name}</h3>
          <p className="brand">by {brand}</p>
          <p>{description}</p>
          <h1> {price}$</h1>
          <Stars stars={rating} />
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
