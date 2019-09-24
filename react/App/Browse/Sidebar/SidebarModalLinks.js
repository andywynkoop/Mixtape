import {
	OPEN_NEW_ARTIST,
	OPEN_NEW_ALBUM,
	OPEN_NEW_SONG,
} from '../../../reducers/ui/modal';

const { connect } = ReactRedux;

const SidebarModalLinks = ({ artist, album, song }) => (
	<ul className="create-modal-links">
		<li onClick={artist}>+ Add Artist</li>
		<li onClick={album}>+ Add Album</li>
		<li onClick={song}>+ Add Song</li>
	</ul>
);

const mdp = dispatch => ({
	artist: () => dispatch({ type: OPEN_NEW_ARTIST }),
	album: () => dispatch({ type: OPEN_NEW_ALBUM }),
	song: () => dispatch({ type: OPEN_NEW_SONG }),
});

export default connect(
	null,
	mdp
)(SidebarModalLinks);
