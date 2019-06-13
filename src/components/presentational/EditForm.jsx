import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../sharedStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 10px
  font-size: 16px;
  border: none;
`;

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
  handleEditInputs: PropTypes.func,
  updatepost: PropTypes.func
};

export default EditForm;
