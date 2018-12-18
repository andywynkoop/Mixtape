import { RECEIVE_SONGS, RECEIVE_ALBUMS } from '../../actions';

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case RECEIVE_SONGS:
      return Object.assign({}, state, payload.albums);
    case RECEIVE_ALBUMS:
      return Object.assign({}, state, action.albums);
    default:
      return state;
  }
}