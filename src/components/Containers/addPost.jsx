import React, { Component } from "react";
import AddPost from "../presentational/addPost";
import Modal from "../modal";
import { Button } from "../sharedStyles";
import PropTypes from "prop-types";

class PostAdd extends Component {
  state = {
    isAddPostOpen: false,
    title: "",
    body: ""
  };

  reset = () => {
    this.setState({ title: "", body: "" });
  };
  handleAdd = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  toogle = () => {
    this.setState(prevState => ({ isAddPostOpen: !prevState.isAddPostOpen }));
  };
  sendPost = () => {
    const { title, body } = this.state;
    const { createPost } = this.props;
    if (!title.trim() || !body.trim()) return;
    createPost({ body, title });
    this.toogle();
    this.reset();
  };

  render() {
    const { isAddPostOpen } = this.state;
    return (
      <div>
        <Button onClick={this.toogle}>Add</Button>
        {isAddPostOpen && (
          <Modal>
            <AddPost handleAdd={this.handleAdd} close={this.toogle} sendPost={this.sendPost} />
          </Modal>
        )}
      </div>
    );
  }
}
PostAdd.propTypes = {
  createPost: PropTypes.func
};
export default PostAdd;
