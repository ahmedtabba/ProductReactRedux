import {
  Fetch_Products,
  Create_Product,
  Fetch_Product,
  Delete_Product,
  Edit_Product
} from "./types";
import productsApi from "../apis/productsApi";
import history from "../history";

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    const response = await productsApi.get("/Items");

    dispatch({ type: Fetch_Products, payload: response.data });
  };
};

export const createProduct = formValues => {
  return async dispatch => {
    const response = await productsApi.post("/Items", formValues);

    dispatch({ type: Create_Product, payload: response.data });
    history.push("/Products");
  };
};

export const fetchProduct = id => {
  return async dispatch => {
    const response = await productsApi.get(`/Items/${id}`);

    dispatch({ type: Fetch_Product, payload: response.data });
  };
};

export const editProduct = (id, formValues) => {
  return async dispatch => {
    const response = await productsApi.put(`/Items/${id}`, formValues);

    dispatch({ type: Edit_Product, payload: response.data });
    history.push("/Products");
  };
};

export const deleteProduct = id => {
  return async dispatch => {
    await productsApi.delete(`/Items/${id}`);

    dispatch({ type: Delete_Product, payload: id });
  };
};
