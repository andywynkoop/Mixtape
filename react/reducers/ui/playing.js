import { PLAY, PAUSE, SELECT_SONG } from '../../actions';

export default (state = false, action) => {
  switch(action.type) {
    case SELECT_SONG:
      return true;
    case PLAY:
      return true;
    case PAUSE:
      return false;
    default:
      return state;
  }
}