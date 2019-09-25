import { RECEIVE_MUSIC, RECEIVE_SONG } from '../../actions';

export default (state = {}, action) => {
	const { type, payload } = action;

	switch (type) {
		case RECEIVE_MUSIC:
		case RECEIVE_SONG:
			return Object.assign({}, state, payload.songs);
		default:
			return state;
	}
};
