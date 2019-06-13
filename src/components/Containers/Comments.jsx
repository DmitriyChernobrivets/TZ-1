import React, { Component } from "react";
import Comments from "../presentational/Comments";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchAddcomment } from "../../store/actions/actions";

class CommentsContainer extends Component {
  state = {
    body: ""
  };
  handleInputs = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  sendComment = () => {
    const { AddComment, id } = this.props;
    const sendObj = {
      ...this.state,
      postId: id
    };
    AddComment(sendObj);
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <Comments
        handleinputs={this.handleInputs}
        close={this.props.close}
        sendComments={this.sendComment}
      />
    );
  }
}
CommentsContainer.propTypes = {
  id: PropTypes.number,
  AddComment: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    AddComment: id => dispatch(fetchAddcomment(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CommentsContainer);
