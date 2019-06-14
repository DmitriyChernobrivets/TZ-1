import React, { Component } from "react";
// import PropTypes from "prop-types";
import { getAllPosts, getAllPostsError } from "../../selectors/selectors";
import { connect } from "react-redux";
import { fetchAllposts, fetchAddcomment, fetchCreatePost } from "../../store/actions/actions";
import styled from "styled-components";
import AddPost from "./addPost";
import ErrorHandler from "../presentational/Error";
import PostCard from "../presentational/PostCard";
import PropTypes from "prop-types";

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
class Home extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }

  render() {
    const { posts, sendComment, createPost, allpostsError } = this.props;
    return (
      <Main>
        {allpostsError && <ErrorHandler text={allpostsError} />}
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

Home.propTypes = {
  getPosts: PropTypes.func,
  posts: PropTypes.arrayOf(PropTypes.object),
  allpostsError: PropTypes.string
};
const mapStateToProps = state => {
  return {
    posts: getAllPosts(state),
    allpostsError: getAllPostsError(state)
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
)(Home);
