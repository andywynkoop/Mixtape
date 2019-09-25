import { RECEIVE_MUSIC } from '../../actions';

export const CLOSE_ANY = 'CLOSE_ANY';
export const OPEN_NEW_ARTIST = 'OPEN_NEW_ARTIST';
export const OPEN_NEW_ALBUM = 'OPEN_NEW_ALBUM';
export const OPEN_NEW_SONG = 'OPEN_NEW_SONG';

export default (state = null, action) => {
	switch (action.type) {
		case OPEN_NEW_ARTIST:
			return 'newArtist';
		case OPEN_NEW_ALBUM:
			return 'newAlbum';
		case OPEN_NEW_SONG:
			return 'newSong';
		case CLOSE_ANY:
		case RECEIVE_MUSIC:
			return null;
		default:
			return state;
	}
};
