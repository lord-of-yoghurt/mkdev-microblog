import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from './PostForm';

class EditPost extends Component {

  render() {
    return (
      <div>
        <h1>Edit post</h1>
        <PostForm
          post={this.props.post}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.find((post) => post.id.toString() === ownProps.match.params.id)
  };
}

export default connect(mapStateToProps)(EditPost);
