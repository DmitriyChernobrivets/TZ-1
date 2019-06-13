import React, { Component } from "react";
import { connect } from "react-redux";
import { RetrievePost, fetchDeletePost } from "../../store/actions/actions";
import PostPageView from "../presentational/PostPage";
import { getPost, getPostError } from "../../selectors/selectors";
import PropTypes from "prop-types";
import ErrorHandler from "../presentational/Error";

class PostPage extends Component {
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
    const { post, postError } = this.props;
    if (postError) {
      return <ErrorHandler text={postError} />;
    }
    return post && <PostPageView post={post} deletePost={this.handleDeletePost} />;
  }
}

PostPage.propTypes = {
  post: PropTypes.object,
  RetrievePost: PropTypes.func,
  deletePost: PropTypes.func,
  match: PropTypes.object
};

const mapStateToProps = state => {
  return {
    post: getPost(state),
    postError: getPostError(state)
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
)(PostPage);
