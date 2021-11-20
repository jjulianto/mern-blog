import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import createBlogReducer from "./createBlogReducer";
import detailBlogReducer from "./detailBlogReducer";

const reducer = combineReducers({
  homeReducer,
  createBlogReducer,
  detailBlogReducer,
});

export default reducer;
