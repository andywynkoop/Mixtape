const { combineReducers } = Redux;
import song from './song';
import playing from './playing';
import queue from './queue';
import modal from './modal';
import songProgress from './songProgress';
import searchResults from './searchResults';

export default combineReducers({
	song,
	playing,
	queue,
	modal,
	songProgress,
	searchResults,
});
