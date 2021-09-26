import axios from "axios";

import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_FILTER_BEGIN,
  GET_FILTER_SUCCESS,
  GET_FILTER_ERROR,
} from "../constants/productsContants";
const url = "/api/products/";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    const { data } = await axios.get(url);

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
  try {
    const respons = await axios.get(`/api/products/${id}`);
    const singleProduct = respons.data;
    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
  } catch (error) {
    dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
  }
};

export const filterProducts = (filter) => async (dispatch, getState) => {
  dispatch({ type: GET_FILTER_BEGIN });
  try {
    const { data } = await axios.get(url);
    console.log(filter);

    dispatch({ type: GET_FILTER_SUCCESS, payload: { data, filter } });
  } catch (error) {
    dispatch({ type: GET_FILTER_ERROR });
  }
};
