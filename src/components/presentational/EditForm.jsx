import React from "react";
import PropTypes from "prop-types";
import { Button, Input, Container } from "../sharedStyles";

const EditForm = ({ close, handleEditInputs, updatepost }) => {
  return (
    <Container>
      <h3>Change Title</h3>
      <Input type="text" name="title" onChange={handleEditInputs} />
      <h3>Change body</h3>
      <Input type="text" name="body" onChange={handleEditInputs} />

      <Button onClick={() => close(false)}>Close</Button>
      <Button onClick={updatepost}>Submit</Button>
    </Container>
  );
};
EditForm.propTypes = {
  handleEditInputs: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  updatepost: PropTypes.func.isRequired
};

export default EditForm;
