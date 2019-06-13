import { PUT_POST_By_ID, PUT_NEW_COMMENT } from "../../constants/ActionTypes";

const defaultState = {
  item: null,
  error: null
};

const AllPosts = (state = defaultState, { type, payload }) => {
  switch (type) {
    case PUT_POST_By_ID:
      return { ...state, item: { ...payload }, error: null };

    case PUT_NEW_COMMENT:
      return {
        ...state,
        item: { ...state.item, comments: state.item.comments.concat(payload), error: null },
        error: null
      };
    default:
      return state;
  }
};

export default AllPosts;
