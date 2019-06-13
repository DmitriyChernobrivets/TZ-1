import React, { useState } from "react";
import styled from "styled-components";
import CommetsContainer from "../Containers/Comments";
import EditContainer from "../Containers/Edit";
import Modal from "../modal";

const Container = styled.div`
  background-color: yellow;
  margin: 0 auto;
  min-height: 100px;
  width: 600px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Title = styled.h2`
  color: red;
`;
const Body = styled.p``;
const Controls = styled.p`
  display: flex;
  justify-content: space-around;
`;
const Button = styled.button`
  padding: 10px;
  color: red;
`;
const Comments = styled.p``;

const PostPage = ({ post, deletePost }) => {
  const [isOpenComments, toogleComment] = useState(false);
  const [isOpenEdit, toogleEdit] = useState(false);
  const { title, body, id, comments } = post;
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
      <Comments>Comments</Comments>
      {comments && comments.map(comment => <div key={comment.id}>{comment.body}</div>)}

      <Controls>
        <Button disabled={isOpenComments} onClick={toogleComment}>
          Add Comment
        </Button>
        <Button disabled={isOpenComments} onClick={toogleEdit}>
          Edit Post
        </Button>

        <Button onClick={deletePost}>DELETE</Button>
      </Controls>
      {isOpenEdit && (
        <Modal>
          <EditContainer close={toogleEdit} post={post} />
        </Modal>
      )}
      {isOpenComments && (
        <Modal>
          <CommetsContainer close={toogleComment} id={id} />
        </Modal>
      )}
    </Container>
  );
};
export default PostPage;
