const { combineReducers } = Redux;
import users from './users';
import songs from './songs';
import albums from './albums';
import artists from './artists';

export default combineReducers({
	users,
	songs,
	albums,
	artists,
});
