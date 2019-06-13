import React, { Component, Fragment } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllposts } from "../../store/actions/actions";
import PostsList from "../presentational/PostsList";

class PostsContainer extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }
  render() {
    const { posts } = this.props;

    return <Fragment>{posts && <PostsList posts={posts} />}</Fragment>;
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
    getPosts: () => dispatch(fetchAllposts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
