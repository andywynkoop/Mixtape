const { combineReducers } = Redux;
import entities from './entities';
import session from './session';
import ui from './ui';
import errors from './errors';

export default combineReducers({
	entities,
	session,
	ui,
	errors,
});
