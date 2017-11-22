import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios.get(`${process.env.BASE_URL}/posts`)
      .then((res) => {
        this.setState({
          posts: res.data
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  displayPosts = (posts) => {
    if (this.state.posts.length > 0) {
      return posts.map((post) => {
        return <Post key={post.id} {...post} />
      });
    }
  };

  render() {
    return (
      <div>
        <h1>All posts</h1>
        {this.displayPosts(this.state.posts)}
      </div>
    );
  }
}
