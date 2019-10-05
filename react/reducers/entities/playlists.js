import { RECEIVE_MUSIC, REMOVE_PLAYLIST } from '../../actions';

export default (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case RECEIVE_MUSIC:
			if (payload.playlists)
				return Object.assign({}, state, action.payload.playlists);
			return state;
		case REMOVE_PLAYLIST:
			const newState = Object.assign({}, state);
			delete newState[action.id];
			return newState;
		default:
			return state;
	}
};
