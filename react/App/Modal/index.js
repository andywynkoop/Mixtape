const { connect } = ReactRedux;
import NewArtistModal from './NewArtistModal';
import NewAlbumModal from './NewAlbumModal';
import NewSongModal from './NewSongModal';
import NewPlaylistModal from './NewPlaylistModal';

const Modal = ({ modal }) => {
	switch (modal) {
		case 'newArtist':
			return <NewArtistModal />;
		case 'newAlbum':
			return <NewAlbumModal />;
		case 'newSong':
			return <NewSongModal />;
		case 'newPlaylist':
			return <NewPlaylistModal />;
		default:
			return <div />;
	}
};

const msp = state => ({
	modal: state.ui.modal,
});

export default connect(msp)(Modal);
