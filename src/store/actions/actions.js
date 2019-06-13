import {
  PUT_POST_By_ID,
  PUT_ALL_POSTS,
  PUT_NEW_COMMENT,
  DELETE_POST,
  ADD_TO_ALL_POSTS,
  ERROR
} from "../../constants/ActionTypes";
import api from "../../sevices/api";
import moment from "moment";

const putAllposts = payload => {
  return {
    type: PUT_ALL_POSTS,
    payload
  };
};
const addToAllPosts = payload => {
  return {
    type: ADD_TO_ALL_POSTS,
    payload
  };
};

const putPost = payload => {
  return {
    type: PUT_POST_By_ID,
    payload
  };
};
const deletePost = payload => {
  return {
    type: DELETE_POST,
    payload
  };
};
const putNewComment = payload => {
  return {
    type: PUT_NEW_COMMENT,
    payload
  };
};
const setError = payload => {
  return {
    type: ERROR,
    payload
  };
};

const fetchAllposts = () => {
  return async dispatch => {
    try {
      const { data } = await api.fetchAllPosts();
      dispatch(putAllposts(data));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };
};
const fetchAddcomment = payload => {
  return async dispatch => {
    try {
      const { data } = await api.fetchAddComment(payload);

      dispatch(putNewComment(data));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };
};
const fetchDeletePost = id => {
  return async dispatch => {
    try {
      await api.fetchDeletePost(id);

      dispatch(deletePost(id));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };
};
const fetchUpdatePost = (id, updatedFields) => {
  return async dispatch => {
    try {
      const date = moment().format("MMM Do YY");
      const sendingData = {
        ...updatedFields,
        date: date
      };
      const { data } = await api.fetchUpdatePost(id, sendingData);

      dispatch(putPost(data));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };
};
const fetchCreatePost = payload => {
  return async dispatch => {
    try {
      const date = moment().format("MMM Do YY");
      const sendingData = {
        ...payload,
        date: date
      };

      const { data } = await api.fetchCreatePost(sendingData);
      dispatch(addToAllPosts(data));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };
};
const RetrievePost = id => {
  return async dispatch => {
    try {
      const { data } = await api.fetchPostByID(id);
      dispatch(putPost(data));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };
};

export {
  fetchDeletePost,
  fetchAllposts,
  fetchUpdatePost,
  fetchAddcomment,
  fetchCreatePost,
  RetrievePost
};
