import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../redux/action/productsAction";
import Stars from "../component/Stars";
import "../css/single_product.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

function SingleProduct() {
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.singleProduct);

  const { product } = singleProduct;

  const {
    name,
    image,
    brand,
    description,
    price,
    aboutItem,
    rating,
    numReview,
  } = product;
  console.log(numReview);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);
  return (
    <div>
      <div className="single_product">
        <div>
          <Link to="/" className="btn">
            <ArrowBackIcon style={{ color: "#fff" }} />
            GO BACK
          </Link>

          <img src={image} alt={name} />
          <h2>{name}</h2>
          <h5>Brand: {brand}</h5>
          <p>{description}</p>
        </div>
        <div>
          <h1>About this item</h1>
          <p>{aboutItem}</p>
          <Stars stars={rating} />
          <h4>Number Review: {numReview}</h4>
          <h2>price: ${price}</h2>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
