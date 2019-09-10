import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import productsReducers from "./productsReducers";

export default combineReducers({
  products: productsReducers,
  form: formReducer //Must be named form
});
