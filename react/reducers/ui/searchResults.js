import { RECEIVE_MUSIC } from '../../actions';

const defaultState = {
	artists: [],
	albums: [],
	songs: [],
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case RECEIVE_MUSIC:
			return action.payload.results || defaultState;
		default:
			return state;
	}
};
