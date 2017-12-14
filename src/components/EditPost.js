import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from './PostForm';
import { startEditPost, startDeletePost } from '../actions/posts';

export class EditPost extends Component {
  onSubmit = (data) => {
    this.props.startEditPost(this.props.post.id, data)
      .then(() => {
        this.props.history.push('/');
      });
  };

  onRemoveClick = () => {
    this.props.startDeletePost({ id: this.props.post.id })
      .then(() => {
        this.props.history.push('/');
      });
  };

  render() {
    return (
      <div>
        <h1>Edit post</h1>
        <PostForm
          post={this.props.post}
          onSubmit={this.onSubmit}
          noUsernameChange={true}
        />
        <button onClick={this.onRemoveClick}>Delete post</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.find((post) => post.id.toString() === ownProps.match.params.id)
  };
}

const mapDispatchToProps = (dispatch) => ({
  startEditPost: (id, post) => dispatch(startEditPost(id, post)),
  startDeletePost: (data) => dispatch(startDeletePost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
