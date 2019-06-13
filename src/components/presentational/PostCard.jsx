import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  min-height: 100px;
  width: 23%;
  margin-bottom: 20px;
  padding: 20px;
  background: #fff;
  box-shadow: 19px 19px 38px rgba(0, 0, 0, 0.2);
  margin-right: 20px;
`;
const Title = styled.h2`
  word-wrap: break-word;
`;
const Body = styled.p`
  word-wrap: break-word;
`;
const DateCreated = styled.p``;

const PostCard = props => {
  const { title, body, id, date } = props;
  return (
    <Card>
      <Title> Title : {title}</Title>
      <Body> Body : {body}</Body>
      <DateCreated>Created: {date}</DateCreated>
      <Link to={`posts/${id}`}>View Post</Link>
    </Card>
  );
};

export default PostCard;
