import _ from "lodash";
import {
  Fetch_Products,
  Fetch_Product,
  Delete_Product,
  Edit_Product,
  Create_Product
} from "../actions/types";

const INI_STATE = {};

export default (state = INI_STATE, action) => {
  switch (action.type) {
    case Fetch_Products:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case Fetch_Product:
      return { ...state, [action.payload.id]: action.payload };

    case Create_Product:
      return { ...state, [action.payload.id]: action.payload };

    case Edit_Product:
      return { ...state, [action.payload.id]: action.payload };

    case Delete_Product:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
