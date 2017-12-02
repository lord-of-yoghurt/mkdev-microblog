import React from 'react';
import { shallow } from 'enzyme';

import { AddPost } from '../../components/AddPost';
import posts from '../fixtures/posts';

let startAddPost, history, wrapper;

// beforeEach(() => {
//   // startAddPost = jest.fn();
//   startAddPost = jest.fn(() => {
//     return new Promise((resolve, reject) => {
//       resolve(posts[0]);
//     })
//   });
//   history      = { push: jest.fn() };
//   wrapper      = shallow(<AddPost startAddPost={startAddPost} history={history} />);
// });

test('renders the component correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// test('handles the onSubmit call correctly', () => {
//   debugger;
//   wrapper.find('PostForm').prop('onSubmit')(posts[0]);
//
//   expect(startAddPost).toHaveBeenLastCalledWith(posts[0]);
//   expect(history.push).toHaveBeenLastCalledWith('/');
// });
