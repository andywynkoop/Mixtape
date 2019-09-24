const { Component } = React;
const { connect } = ReactRedux;
import NewArtistModal from './NewArtistModal';
import NewAlbumModal from './NewAlbumModal';
import NewSongModal from './NewSongModal';

const Modal = ({ modal }) => {
	switch (modal) {
		case 'newArtist':
			return <NewArtistModal />;
		case 'newAlbum':
			return <NewAlbumModal />;
		case 'newSong':
			return <NewSongModal />;
		default:
			return <div />;
	}
};

const msp = state => ({
	modal: state.ui.modal,
});

export default connect(msp)(Modal);
