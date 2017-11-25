import React from 'react';

const Post = ({ title, body }) => (
  <div>
    <h3>{title}</h3>
    <p>{body}</p>
    <hr></hr>
  </div>
);

export default Post;
