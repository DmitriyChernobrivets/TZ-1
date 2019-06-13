import React from "react";
import { Button, Input, Container, Title } from "../sharedStyles";
import PropTypes from "prop-types";

const addPost = ({ handleAdd, sendPost, close }) => {
  return (
    <Container>
      <Title>Title</Title>
      <Input type="text" name="title" onChange={handleAdd} />
      <Title>Body</Title>
      <Input type="text" name="body" onChange={handleAdd} />

      <Button onClick={sendPost}>AddPost</Button>
      <Button onClick={close}>Close</Button>
    </Container>
  );
};
addPost.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  sendPost: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
};
export default addPost;
