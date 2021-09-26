import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/filterList.css";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../redux/action/productsAction";

function Filter_List() {
  const dispatch = useDispatch();

  const chengeType = (type) => {
    dispatch(filterProducts(type));
  };

  return (
    <div className="filterList mobile">
      <li onClick={() => chengeType("all")}>
        <p>ALL</p>
      </li>
      <li onClick={() => chengeType("electronics")}>
        <p>Electronics</p>
      </li>
      <li onClick={() => chengeType("mobiles")}>
        <p>Mobiles</p>
      </li>
      <li onClick={() => chengeType("laptops")}>
        <p>Laptops</p>
      </li>
      <li onClick={() => chengeType("audio")}>
        <p>Audio</p>
      </li>
      <li onClick={() => chengeType("technology")}>
        <p>Technology</p>
      </li>
      <li onClick={() => chengeType("grocery")}>
        <p>Grocery</p>
      </li>
      <li onClick={() => chengeType("fashion")}>
        <p>Fashion</p>
      </li>
      <li onClick={() => chengeType("home")}>
        <p>Home</p>
      </li>
    </div>
  );
}

export default Filter_List;
