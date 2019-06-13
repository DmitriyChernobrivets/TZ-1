import { PUT_ALL_POSTS } from "../../constants/ActionTypes";

const AllPosts = (state = [], { type, payload }) => {
  switch (type) {
    case PUT_ALL_POSTS:
      return [...payload];
    default:
      return state;
  }
};

export default AllPosts;
