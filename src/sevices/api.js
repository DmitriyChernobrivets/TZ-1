import axios from "axios";
import settings from "./apisettings";

const { URI } = settings;

const api = {
  fetchAllPosts: () => axios.get(URI + "posts"),
  fetchPostByID: id => axios.get(URI + "posts/" + id + "?_embed=comments"),
  fetchAddComment: payload => axios.post(URI + "comments", payload),
  fetchUpdatePost: (id, payload) => axios.put(URI + "posts/" + id, payload),
  fetchCreatePost: payload => axios.post(URI + "posts", payload),
  fetchDeletePost: id => axios.delete(URI + "posts/" + id)
};

export default api;
