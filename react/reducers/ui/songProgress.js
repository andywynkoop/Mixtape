import { RECEIVE_SONG_PROGRESS, RECEIVE_SONG } from '../../actions';

export default (state = null, action) => {
	switch (action.type) {
		case RECEIVE_SONG_PROGRESS:
			return action.songProgress;
		case RECEIVE_SONG:
			return null;
		default:
			return state;
	}
};
