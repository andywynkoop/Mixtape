import { SELECT_SONG, RECEIVE_SONGS } from '../../actions';

export default (state = [], action) => {
  switch(action.type) {
    case RECEIVE_SONGS:
      return Object.keys(action.payload.songs);
    case SELECT_SONG:
      return action.queue;
    default:
      return state;
  }
}