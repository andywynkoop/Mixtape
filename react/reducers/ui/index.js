const { combineReducers } = Redux;
import menu from './menu';
import song from './song';
import playing from './playing';
import queue from './queue';

export default combineReducers({
	menu,
	song,
	playing,
	queue,
});
