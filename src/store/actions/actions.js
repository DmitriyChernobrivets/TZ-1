import { PUT_POST_By_ID, PUT_ALL_POSTS } from "../../constants/ActionTypes";
import api from "../../sevices/api";

const putAllposts = payload => {
  return {
    type: PUT_ALL_POSTS,
    payload
  };
};
const putPost = () => {
  return {
    type: PUT_POST_By_ID
  };
};

const fetchAllposts = () => {
  return async dispatch => {
    const { data } = await api.fetchAllPosts();
    dispatch(putAllposts(data));
  };
};

export { fetchAllposts };
