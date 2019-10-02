import { RECEIVE_MUSIC, RECEIVE_SONG_PROGRESS } from '../../actions';

export const CLOSE_ANY = 'CLOSE_ANY';
export const OPEN_NEW_ARTIST = 'OPEN_NEW_ARTIST';
export const OPEN_NEW_ALBUM = 'OPEN_NEW_ALBUM';
export const OPEN_NEW_SONG = 'OPEN_NEW_SONG';
export const OPEN_NEW_PLAYLIST = 'OPEN_NEW_PLAYLIST';

export default (state = null, action) => {
	switch (action.type) {
		case OPEN_NEW_ARTIST:
			return 'newArtist';
		case OPEN_NEW_ALBUM:
			return 'newAlbum';
		case OPEN_NEW_SONG:
			return 'newSong';
		case OPEN_NEW_PLAYLIST:
			return 'newPlaylist';
		case CLOSE_ANY:
			return null;
		case RECEIVE_SONG_PROGRESS:
			if (action.songProgress == 100) return null;
			return state;
		default:
			return state;
	}
};
