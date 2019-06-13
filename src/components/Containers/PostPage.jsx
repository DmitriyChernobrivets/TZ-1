import React, { Component } from "react";
import { connect } from "react-redux";
import { RetrievePost, fetchDeletePost } from "../../store/actions/actions";
import PostPage from "../presentational/PostPage";
import { getPosts } from "../../selectors/selectors";
import PropTypes from "prop-types";

class InitialPostContainer extends Component {
  static propTypes = {
    post: null
  };
  componentDidMount() {
    const { RetrievePost, match } = this.props;

    RetrievePost(match.params.postId);
  }
  handleDeletePost = () => {
    const { deletePost, post, history } = this.props;
    deletePost(post.id);
    history.push("/");
  };
  render() {
    const { post } = this.props;
    return post && <PostPage post={post} deletePost={this.handleDeletePost} />;
  }
}

InitialPostContainer.propTypes = {
  post: PropTypes.object,
  RetrievePost: PropTypes.func,
  deletePost: PropTypes.func,
  match: PropTypes.object
};
const mapStateToProps = state => {
  return {
    post: getPosts(state)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    RetrievePost: id => dispatch(RetrievePost(id)),
    deletePost: id => dispatch(fetchDeletePost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialPostContainer);
