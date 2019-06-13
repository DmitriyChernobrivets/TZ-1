import {
  PUT_POST_By_ID,
  PUT_ALL_POSTS,
  AD_TO_ALL_POSTS,
  PUT_NEW_COMMENT,
  DELETE_POST,
  SET_LOADING
} from "../../constants/ActionTypes";
import api from "../../sevices/api";
import moment from "moment";

const putAllposts = payload => {
  return {
    type: PUT_ALL_POSTS,
    payload
  };
};
const setLoading = payload => {
  return {
    type: SET_LOADING,
    payload
  };
};
const putPost = payload => {
  return {
    type: PUT_POST_By_ID,
    payload
  };
};
const putNewComment = payload => {
  return {
    type: PUT_NEW_COMMENT,
    payload
  };
};
const deletePost = payload => {
  return {
    type: DELETE_POST
  };
};
const addToAllPosts = payload => {
  return {
    type: AD_TO_ALL_POSTS,
    payload
  };
};

const fetchAllposts = () => {
  return async dispatch => {
    try {
      const { data } = await api.fetchAllPosts();
      console.log(data);
      dispatch(putAllposts(data));
    } catch (err) {
      console.log(err);
    }
  };
};
const fetchAddcomment = payload => {
  return async dispatch => {
    try {
      const { data } = await api.fetchAddComment(payload);
      console.log(data);
      dispatch(putNewComment(data));
    } catch (err) {
      console.log(err);
    }
  };
};
const fetchDeletePost = id => {
  return async dispatch => {
    try {
      const { data } = await api.fetchDeletePost(id);

      dispatch(putNewComment(data));
    } catch (err) {
      console.log(err);
    }
  };
};
const fetchUpdatePost = (id, updatedFields) => {
  return async dispatch => {
    try {
      const date = moment()
        .subtract(10, "days")
        .calendar();
      const sendingData = {
        ...updatedFields,
        date: date
      };
      const { data } = await api.fetchUpdatePost(id, sendingData);

      dispatch(putPost(data));
    } catch (err) {
      console.log(err);
    }
  };
};
const fetchCreatePost = payload => {
  return async dispatch => {
    try {
      const date = moment()
        .subtract(10, "days")
        .calendar();
      const sendingData = {
        ...payload,
        date: date
      };

      const { data } = await api.fetchCreatePost(sendingData);
      dispatch(addToAllPosts(data));
    } catch (err) {
      console.log(err);
    }
  };
};
const RetrievePost = id => {
  return async dispatch => {
    try {
      const { data } = await api.fetchPostByID(id);

      dispatch(putPost(data));
    } catch (err) {
      console.log(err);
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
