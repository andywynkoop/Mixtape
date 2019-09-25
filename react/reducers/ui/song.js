import { SELECT_SONG, REMOVE_CURRENT_USER } from '../../actions';

export default (state = null, action) => {
	switch (action.type) {
		case SELECT_SONG:
			return action.songId;
		case REMOVE_CURRENT_USER:
			return null;
		default:
			return state;
	}
};
