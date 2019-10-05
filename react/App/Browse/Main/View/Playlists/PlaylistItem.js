const { Component } = React;
const { connect } = ReactRedux;
const { Link } = ReactRouter;
import { playFirst, pause } from '../../../../../actions';
import PlaylistOptionsModal from './PlaylistOptionsModal';

class PlaylistItem extends Component {
	state = {
		modalOpen: false,
	};

	openModal = e => {
		e.stopPropagation();
		this.setState({ modalOpen: true }, () => {
			document.addEventListener('click', this.closeModal);
		});
	};

	closeModal = () =>
		this.setState({ modalOpen: false }, () =>
			document.removeEventListener('click', this.closeModal)
		);

	render() {
		const {
			playlist,
			thisPlaylistIsPlaying,
			shuffledSongIds,
			play,
			pause,
		} = this.props;
		let click, icon;
		if (thisPlaylistIsPlaying) {
			click = pause;
			icon = <i className="fas fa-pause" />;
		} else {
			click = () => play(shuffledSongIds);
			icon = <i className="fas fa-play" />;
		}

		return (
			<li className="playlist-item">
				<div>
					<div className="playlist-icon-container" onClick={click}>
						<img src={playlist.img} />
						{icon}
					</div>
					<div className="playlist-info">
						<h4>
							<Link to={`/browse/playlists/${playlist.id}`}>
								{playlist.name}
							</Link>
						</h4>
						<p>{playlist.songCount} Songs</p>
					</div>
				</div>
				<i onClick={this.openModal} className="fas fa-ellipsis-h" />
				<PlaylistOptionsModal
					id={playlist.id}
					isOpen={this.state.modalOpen}
				/>
			</li>
		);
	}
}

const msp = (state, { playlist, songs, playlistSongs }) => {
	const allSongs = playlist.playlistSongIds.map(
		id => songs[playlistSongs[id].songId]
	);
	const shuffledSongIds = allSongs
		.map(s => s.id)
		.sort((i1, i2) => Math.floor(Math.random() * 3) - 1);
	const { song, playing } = state.ui;
	const thisPlaylistIsPlaying =
		playing && shuffledSongIds.includes(parseInt(song));
	return {
		thisPlaylistIsPlaying,
		shuffledSongIds,
	};
};

const mdp = dispatch => ({
	pause: () => dispatch(pause()),
	play: queue => dispatch(playFirst(queue)),
});

export default connect(
	msp,
	mdp
)(PlaylistItem);
