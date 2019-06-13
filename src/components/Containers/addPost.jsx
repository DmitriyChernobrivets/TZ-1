import React, { Component } from "react";
import AddPost from "../presentational/addPost";
import styled from "styled-components";
import { Button } from "../sharedStyles";

class PostAdd extends Component {
  state = {
    isAddPostOpen: false,
    title: "",
    body: ""
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
    createPost({ body, title });
  };

  render() {
    const { isAddPostOpen } = this.state;
    return (
      <div>
        <Button onClick={this.toogle}>Add</Button>
        {isAddPostOpen && <AddPost handleAdd={this.handleAdd} sendPost={this.sendPost} />}
      </div>
    );
  }
}

export default PostAdd;
