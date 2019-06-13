import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllposts, fetchAddcomment, fetchCreatePost } from "../../store/actions/actions";
import styled from "styled-components";
import AddPost from "./addPost";
import PostCard from "../presentational/PostCard";

const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  margin: 0 auto;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;
class PostsContainer extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { posts, sendComment, createPost } = this.props;
    return (
      <Main>
        <AddPost createPost={createPost} />
        <PostsWrapper>
          {posts.map(post => (
            <PostCard {...post} key={post.id} addComment={sendComment} />
          ))}
        </PostsWrapper>
      </Main>
    );
  }
}

// PostsContainer.propTypes = {

// }
const mapStateToProps = state => {
  return {
    posts: state.AllPosts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(fetchAllposts()),
    sendComment: payload => dispatch(fetchAddcomment(payload)),
    createPost: payload => dispatch(fetchCreatePost(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
