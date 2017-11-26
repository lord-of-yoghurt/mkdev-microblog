import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({ id, title, body }) => (
  <div>
    <Link to={`posts/${id}`}>
      <h3>{title}</h3>
    </Link>
    <p>{body}</p>
    <hr></hr>
  </div>
);

export default PostListItem;
