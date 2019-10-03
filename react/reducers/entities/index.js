const { combineReducers } = Redux;
import users from './users';
import songs from './songs';
import albums from './albums';
import artists from './artists';
import search from './search';
import playlists from './playlists';
import playlistSongs from './playlistSongs';

export default combineReducers({
	users,
	songs,
	albums,
	artists,
	search,
	playlists,
	playlistSongs,
});
