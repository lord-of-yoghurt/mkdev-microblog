import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({ id, title, body, created_at }) => (
  <div>
    <Link to={`edit/${id}`}>
      <h3>{title}</h3>
    </Link>
    <p>{body}</p>
    <p>Created at: {new Date(created_at).toString()}</p>
    <hr></hr>
  </div>
);

export default PostListItem;
