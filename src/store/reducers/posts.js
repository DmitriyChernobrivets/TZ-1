import { PUT_ALL_POSTS, ADD_TO_ALL_POSTS, ERROR, DELETE_POST } from "../../constants/ActionTypes";
const defaultState = {
  items: [],
  error: null
};

const AllPosts = (state = defaultState, { type, payload }) => {
  switch (type) {
    case PUT_ALL_POSTS:
      return { items: [...payload], error: null };
    case ADD_TO_ALL_POSTS:
      return { items: [...state.items, payload], error: null };
    case DELETE_POST:
      return { items: state.items.filter(item => item.id !== payload), error: null };
    case ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default AllPosts;
