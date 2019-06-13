import { combineReducers } from "redux";
import AllPosts from "./posts";
// import Loading from "./loading";
import post from "./post";

export default combineReducers({
  AllPosts,
  post
  // loading
});
