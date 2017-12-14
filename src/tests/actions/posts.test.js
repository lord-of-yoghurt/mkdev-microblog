import * as postActions from '../../actions/posts';
import * as co from '../../constants/posts';
import posts from '../fixtures/posts';

describe('actions for posts', () => {
  it('returns a valid action for setting posts', () => {
    const action = postActions.setPosts(posts);

    expect(action).toEqual({
      type: co.SET_POSTS,
      posts
    });
  });

  it('returns a valid action for adding a post', () => {
    const action = postActions.addPost(posts[0]);

    expect(action).toEqual({
      type: co.ADD_POST,
      post: posts[0]
    });
  });

  it('returns a valid action for editing a post', () => {
    const updates = {
      title: 'updated title'
    };
    const action = postActions.editPost(posts[1].id, updates);

    expect(action).toEqual({
      type: co.EDIT_POST,
      id: posts[1].id,
      updates
    });
  });

  it('returns a valid action for deleting a post', () => {
    const id = posts[2].id;
    const action = postActions.deletePost({ id });

    expect(action).toEqual({
      type: co.DELETE_POST,
      id
    });
  });
});
