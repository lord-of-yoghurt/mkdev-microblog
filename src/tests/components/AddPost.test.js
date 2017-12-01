import React from 'react';
import { shallow } from 'enzyme';

import { AddPost } from '../../components/AddPost';
import posts from '../fixtures/posts';

let startAddPost, history, wrapper;

beforeEach(() => {
  startAddPost = jest.fn();
  history      = { push: jest.fn() };
  wrapper      = shallow(<AddPost startAddPost={startAddPost} history={history} />);
});

test('renders the component correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('handles the onSubmit call correctly', () => {
  wrapper.find('PostForm').prop('onSubmit')(posts[0]);

  expect(startAddPost).toHaveBeenLastCalledWith(posts[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
