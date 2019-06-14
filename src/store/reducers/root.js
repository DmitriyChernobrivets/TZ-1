import { combineReducers } from "redux";
import AllPosts from "./posts";
import post from "./post";

export default combineReducers({
  AllPosts,
  post
});
