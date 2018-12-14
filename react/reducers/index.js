import { combineReducers } from 'redux-lite';
import entities from './entities';
import session from './session';
import errors from './errors';

export default combineReducers({
  entities,
  session,
  errors
});