import React from "react";
import { Container, Input, Button, Title } from "../sharedStyles";
import PropTypes from "prop-types";

const CommentsForm = ({ handleinputs, close, sendComments }) => {
  return (
    <Container>
      <Title>Please Enter comment: </Title>
      <Input type="text" name="body" onChange={handleinputs} />
      <Button onClick={() => close(false)}>close</Button>
      <Button onClick={sendComments}>Submit</Button>
    </Container>
  );
};
CommentsForm.propTypes = {
  handleinputs: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  sendComments: PropTypes.func.isRequired
};

export default CommentsForm;
