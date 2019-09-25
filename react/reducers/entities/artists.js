import { RECEIVE_MUSIC, RECEIVE_SONG } from '../../actions';

export default (state = {}, action) => {
	const { type, payload } = action;

	switch (type) {
		case RECEIVE_SONG:
		case RECEIVE_MUSIC:
			return Object.assign({}, state, payload.artists);
		default:
			return state;
	}
};
