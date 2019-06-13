import React, { Component } from "react";
import EditForm from "../presentational/EditForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchUpdatePost } from "../../store/actions/actions";

class EditContainer extends Component {
  state = {
    title: "",
    body: ""
  };
  handleEditInputs = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  updatePost = () => {
    const { updatePost, post } = this.props;
    const updatedFields = this.state;
    updatePost(post.id, updatedFields);
  };
  render() {
    return (
      <EditForm
        handleEditInputs={this.handleEditInputs}
        close={this.props.close}
        updatepost={this.updatePost}
      />
    );
  }
}

EditContainer.propTypes = {
  post: PropTypes.object.isRequired,
  updatePost: PropTypes.func
};
const mapDispatchToProps = dispatch => {
  return {
    updatePost: (id, payload) => dispatch(fetchUpdatePost(id, payload))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditContainer);
