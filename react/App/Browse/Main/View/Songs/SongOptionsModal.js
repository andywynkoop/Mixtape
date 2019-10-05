const { connect } = ReactRedux;
import { deleteSongFromPlaylist } from '../../../../../actions';

const SongOptionsModal = ({
	isOpen,
	remove,
	isOnPlaylist,
	playlistSongId,
	showPlaylists,
}) => {
	if (isOnPlaylist)
		return (
			<div className={`item-options ${isOpen ? '' : 'hidden'}`}>
				<p
					onClick={e => {
						e.stopPropagation();
						remove(playlistSongId);
					}}
				>
					Remove...
				</p>
			</div>
		);
	else
		return (
			<div className={`item-options ${isOpen ? '' : 'hidden'}`}>
				<p onClick={showPlaylists}>Add To Playlist...</p>
			</div>
		);
};

const mdp = dispatch => ({
	remove: id => dispatch(deleteSongFromPlaylist(id)),
});

export default connect(
	null,
	mdp
)(SongOptionsModal);
