import { 
  RECEIVE_SESSION_ERRORS, 
  CLEAR_ERRORS,
  RECEIVE_CURRENT_USER
 } from '../../actions';

export default (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON.errors;
    case RECEIVE_CURRENT_USER:
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}