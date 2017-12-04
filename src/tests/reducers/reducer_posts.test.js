import reducer from '../../reducers/reducer_posts';
import * as co from '../../constants/posts/';
import posts from '../fixtures/posts';

describe('posts reducer', () => {
  it('sets the default state to an empty array', () => {
    const state = reducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
  });

  it('handles adding a post correctly', () => {
    const post = {
      title: 'learning how to test',
      body: 'it can be challenging, but i will succeed!',
      username: 'test_n00b'
    };

    const action = {
      type: co.ADD_POST,
      post
    };

    const state = reducer(posts, action);

    expect(state[3].title).toBe('learning how to test');
  });

  it('handles editing a post correctly', () => {
    const updates = {
      title: 'i\'ve edited the title!'
    };

    const action = {
      type: co.EDIT_POST,
      id: posts[0].id,
      updates
    };

    const state = reducer(posts, action);

    expect(state[0].title).toBe('i\'ve edited the title!');
  });
});
