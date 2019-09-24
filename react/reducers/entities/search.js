import { RECEIVE_YOUTUBE } from '../../actions';

export default (state = [], action) => {
	switch (action.type) {
		case RECEIVE_YOUTUBE:
			return action.results.items;
		default:
			return state;
	}
};
