import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostListItem = ({
  id,
  title,
  body,
  created_at: createdAt,
  updated_at: updatedAt
}) => (
  <div>
    <Link to={`edit/${id}`}>
      <h3>{title}</h3>
    </Link>
    <p>{body}</p>
    {
      createdAt === updatedAt ? (
        <p>Created: {moment(createdAt).format("MMM Do, YYYY, [at] h:mm a")}</p>
      ) : (
        <p>Updated: {moment(updatedAt).format("MMM Do, YYYY, [at] h:mm a")}</p>
      )
    }
    <hr></hr>
  </div>
);

export default PostListItem;
