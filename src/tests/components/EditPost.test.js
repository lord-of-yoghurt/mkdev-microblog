import React from 'react';
import { shallow } from 'enzyme';

import { EditPost } from '../../components/EditPost';

test('renders the component correctly', () => {
  const wrapper = shallow(<EditPost />);

  expect(wrapper).toMatchSnapshot();
});

// add test for onSubmit with async capabilities!
