import React, { Component } from 'react';

import CharCounter from './CharCounter';

export default class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      error: ''
    };
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onBodyChange = (e) => {
    const body = e.target.value;
    this.setState(() => ({ body }));
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      title: this.state.title,
      body: this.state.body
    });

    this.clearForm();
  };

  clearForm = () => {
    this.setState(() => ({
      title: '',
      body: ''
    }));
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Short title"
          maxLength="30"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <CharCounter max={30} length={this.state.title.length} />
        <br></br>
        <textarea
          placeholder="Concise body"
          maxLength="250"
          value={this.state.body}
          onChange={this.onBodyChange}
        >
        </textarea>
        <CharCounter max={250} length={this.state.body.length} />
        <button>Submit</button>
      </form>
    );
  }
}
