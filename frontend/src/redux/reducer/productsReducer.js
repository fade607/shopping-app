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

export const productListReduser = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BEGIN:
      return { loading: true, products: [] };
    case GET_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };

    case GET_FILTER_SUCCESS:
      const { data } = action.payload;
      console.log(data);
      const filter = action.payload.filter;

      const productsFiltred = data.filter(
        (product) => product.category === filter
      );
      console.log("filtred" + productsFiltred);
      return { loading: false, products: productsFiltred };
    case GET_PRODUCTS_ERROR:
      return { loading: false, error: true };

    default:
      return state;
  }
};

export const singleProduct = (state = { product: {} }, action) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCT_BEGIN:
      return { loading: true, product: {} };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };

    case GET_SINGLE_PRODUCT_ERROR:
      return { loading: false, error: true };

    default:
      return state;
  }
};
/*
export const filterProducts = (state = { products: [] }, action) => {
  console.log("fade");
  console.log(action.payload);
  const filter = action.payload.filter;
  console.log(filter);
  const allProducts = action.payload.data;
  switch (action.payload) {
    case GET_FILTER_BEGIN:
      return { loading: true };
    case GET_FILTER_SUCCESS:
      const productsFiltred = allProducts.filter(
        (product) => product.Category === filter
      );
      return { loading: false, products: productsFiltred };
    case GET_FILTER_ERROR:
      return { error: true };
    default:
      return state;
  }
};
*/
