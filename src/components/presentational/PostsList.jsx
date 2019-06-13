import React from "react";
import PostCard from "./PostCard";
import PropTypes from "prop-types";

const PostsList = props => {
  const { posts } = props;
  return (
    <div>
      {posts.map(post => (
        <PostCard {...post} key={post.id} />
      ))}
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array
};
export default PostsList;
