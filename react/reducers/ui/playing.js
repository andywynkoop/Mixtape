import { PLAY, PAUSE, SELECT_SONG, REMOVE_CURRENT_USER } from '../../actions';

export default (state = false, action) => {
	switch (action.type) {
		case SELECT_SONG:
			return true;
		case PLAY:
			return true;
		case PAUSE:
			return false;
		case REMOVE_CURRENT_USER:
			if (window.audio) window.audio.pause();
			delete window.audio;
			return false;
		default:
			return state;
	}
};
