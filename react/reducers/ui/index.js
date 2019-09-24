const { combineReducers } = Redux;
import menu from './menu';
import song from './song';
import playing from './playing';
import queue from './queue';
import modal from './modal';

export default combineReducers({
	menu,
	song,
	playing,
	queue,
	modal,
});
