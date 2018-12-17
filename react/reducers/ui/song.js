import { SELECT_SONG } from '../../actions';

export default (state = null, action) => {
  switch(action.type) {
    case SELECT_SONG:
      return action.songId;
    default:
      return state;
  }
}