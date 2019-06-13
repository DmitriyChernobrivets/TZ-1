import React from "react";

const addPost = props => {
  const { handleAdd, sendPost } = props;
  return (
    <div>
      <p>Title</p>
      <input type="text" name="title" onChange={handleAdd} />
      <p>body</p>
      <input type="text" name="body" onChange={handleAdd} />

      <button onClick={sendPost}>sendPost</button>
    </div>
  );
};

export default addPost;
