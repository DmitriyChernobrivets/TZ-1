import axios from "axios";
import settings from "./apisettings";

const { URI } = settings;

const api = {
  fetchAllPosts: () => axios.get(URI),
  fetchPostByID: id => axios.get(URI + id + "?_embed=comments")
};

export default api;
