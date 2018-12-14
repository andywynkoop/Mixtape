import { RECEIVE_CURRENT_USER } from '../../actions';

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { [action.user.id]: action.user });
    default:
      return state;
  }
}