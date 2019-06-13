import { PUT_POST_By_ID, PUT_NEW_COMMENT, DELETE_POST } from "../../constants/ActionTypes";

const AllPosts = (state = null, { type, payload }) => {
  switch (type) {
    case PUT_POST_By_ID:
      return { ...state, ...payload };
    case DELETE_POST:
      return null;
    case PUT_NEW_COMMENT:
      return { ...state, comments: state.comments.concat(payload) };
    default:
      return state;
  }
};

export default AllPosts;
