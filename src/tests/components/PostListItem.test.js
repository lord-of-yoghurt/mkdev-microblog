import React from 'react';
import { shallow } from 'enzyme';

import PostListItem from '../../components/PostListItem';

test('renders the component correctly', () => {
  const wrapper = shallow(<PostListItem />);

  expect(wrapper).toMatchSnapshot();
});
