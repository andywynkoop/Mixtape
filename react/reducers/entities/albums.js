import { RECEIVE_SONGS, RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../../actions';

export default (state = {}, action) => {
	const { type, payload } = action;

	switch (type) {
		case RECEIVE_SONGS:
			return Object.assign({}, state, payload.albums);
		case RECEIVE_ALBUMS:
			return Object.assign({}, state, action.albums);
		case RECEIVE_ALBUM:
			return Object.assign({}, state, action.album);
		default:
			return state;
	}
};
