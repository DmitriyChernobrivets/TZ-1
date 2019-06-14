const getPost = state => state.post.item;
const getAllPosts = state => state.AllPosts.items.sort();
const getAllPostsError = state => state.AllPosts.error;
const getPostError = state => state.post.error;

export { getPost, getAllPosts, getPostError, getAllPostsError };
