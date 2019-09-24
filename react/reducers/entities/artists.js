import { RECEIVE_SONGS, RECEIVE_ARTIST } from '../../actions';

export default (state = {}, action) => {
	const { type, payload } = action;

	switch (type) {
		case RECEIVE_SONGS:
			return Object.assign({}, state, payload.artists);
		case RECEIVE_ARTIST:
			return Object.assign({}, state, action.artist);
		default:
			return state;
	}
};
