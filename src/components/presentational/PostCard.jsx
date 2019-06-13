import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: red;
`;
const PostCard = ({ title, body, author, id }) => {
  return (
    <Card>
      <div> {title}</div>
    </Card>
  );
};

export default PostCard;
