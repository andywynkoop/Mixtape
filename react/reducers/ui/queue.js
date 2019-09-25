import { SELECT_SONG, REMOVE_CURRENT_USER } from '../../actions';

export default (state = [], action) => {
	switch (action.type) {
		case SELECT_SONG:
			return action.queue;
		case REMOVE_CURRENT_USER:
			return [];
		default:
			return state;
	}
};
