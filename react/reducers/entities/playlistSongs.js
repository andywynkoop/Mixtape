import { RECEIVE_MUSIC } from '../../actions';

export default (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case RECEIVE_MUSIC:
			if (payload.playlistSongs)
				return Object.assign({}, state, action.payload.playlistSongs);
			return state;
		default:
			return state;
	}
};
