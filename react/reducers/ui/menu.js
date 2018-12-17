import { CHANGE_MENU } from '../../actions';

export default (state = "songs", action) => {
  switch(action.type) {
    case CHANGE_MENU:
      return action.menu
    default:
      return state;
  }
}