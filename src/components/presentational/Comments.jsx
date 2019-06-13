import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const CommentsForm = props => {
  const { handleinputs, close, sendComments } = props;
  return (
    <Container>
      <h3>Please Enter comment: </h3>
      <input type="text" name="body" onChange={handleinputs} />
      <button onClick={() => close(false)}>close</button>
      <button onClick={sendComments}>Submit</button>
    </Container>
  );
};

export default CommentsForm;
