import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions'

export default (state = null, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user.id;
    case REMOVE_CURRENT_USER:
      return null;
    default:
      return state;
  }
}