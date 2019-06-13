import { PUT_ALL_POSTS, AD_TO_ALL_POSTS } from "../../constants/ActionTypes";

const AllPosts = (state = [], { type, payload }) => {
  switch (type) {
    case PUT_ALL_POSTS:
      return [...payload];
    case AD_TO_ALL_POSTS:
      return [...state, payload];
    default:
      return state;
  }
};

export default AllPosts;
