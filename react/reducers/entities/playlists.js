import { RECEIVE_MUSIC } from '../../actions';

export default (state = {}, action) => {
	const { type, payload } = action;
	switch (type) {
		case RECEIVE_MUSIC:
			if (payload.playlists)
				return Object.assign({}, state, action.payload.playlists);
			return state;
		default:
			return state;
	}
};
