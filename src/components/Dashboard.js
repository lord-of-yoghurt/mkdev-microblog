import React, { Component } from 'react';

import Post from './Post';

export default class Dashboard extends Component {
  posts = [
    {
      id: 1,
      title: "First post",
      body: "This is cool"
    },
    {
      id: 2,
      title: "Second post",
      body: "This is even cooler"
    },
    {
      id: 3,
      title: "Last post",
      body: "now i'm bored"
    },
  ];

  displayPosts = (posts) => {
    return posts.map(({ id, title, body }) => {
      return <Post key={id} title={title} body={body} />
    });
  };

  render() {
    return (
      <div>
        <h1>All posts</h1>
        {this.displayPosts(this.posts)}
      </div>
    );
  }
}
