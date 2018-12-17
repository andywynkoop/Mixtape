import { RECEIVE_SONGS } from '../../actions';

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case RECEIVE_SONGS:
      return Object.assign({}, state, payload.artists);
    default:
      return state;
  }
}