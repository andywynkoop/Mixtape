const { connect } = ReactRedux;
import { addSongToPlaylist } from '../../../../../actions';

const PlaylistAddOptions = ({ isOpen, playlists, add }) => (
	<div className={`item-options ${isOpen ? '' : 'hidden'}`}>
		<ul>
			{playlists.map(playlist => (
				<li onClick={e => add(playlist.id)}>
					<p>{playlist.name}</p>
				</li>
			))}
		</ul>
	</div>
);

const msp = () => {
	const playlists = store.getState().entities.playlists;
	return {
		playlists: Object.values(playlists),
	};
};

const mdp = (dispatch, { songId }) => ({
	add: playlistId => dispatch(addSongToPlaylist(songId, playlistId)),
});

export default connect(
	msp,
	mdp
)(PlaylistAddOptions);
