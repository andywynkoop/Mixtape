const { Component } = React;
const { connect } = ReactRedux;
const { Link } = ReactRouter;
import { fetchPlaylist } from '../../../../../actions';
import Song from '../Songs/Song';

class Playlist extends Component {
	componentDidMount() {
		this.props.fetchPlaylist();
	}

	rotateQueue = songId => {
		const { queue } = this.props;
		const i = queue.findIndex(id => id == songId);
		const beginning = queue.slice(i);
		const end = queue.slice(0, i);
		return beginning.concat(end);
	};

	render() {
		const { playlist, albums, artists, songsInOrder } = this.props;
		if (!playlist) return <div />;
		const { img, name } = playlist;
		return (
			<div className="album-show playlist">
				<div className="album-show-artist">
					<img src={img} />
					<h4>{name}</h4>
				</div>
				<ul>
					{songsInOrder.map((song, i) => (
						<Song
							artists={artists}
							key={song.id}
							song={song}
							img={albums[song.albumId].img}
							queue={this.rotateQueue(song.id)}
						/>
					))}
				</ul>
				<Link to="/browse/playlists">
					<button className="playlist-back">
						<i className="fas fa-chevron-left" />
					</button>
				</Link>
			</div>
		);
	}
}

const mstp = (state, props) => {
	const playlistId = props.match.params.playlistId;
	const playlist = state.entities.playlists[playlistId];
	const { songs, playlistSongs, artists, albums } = state.entities;
	let songsInOrder = [];
	if (playlist) {
		songsInOrder = playlist.playlistSongIds
			.map(id => songs[playlistSongs[id].songId])
			.sort((s1, s2) => (s1.ord < s2.ord ? 1 : -1));
	}
	return {
		playlist,
		queue: songsInOrder.map(s => s.id),
		albums,
		artists,
		songsInOrder,
	};
};

const mdtp = (dispatch, props) => ({
	fetchPlaylist: () => dispatch(fetchPlaylist(props.match.params.playlistId)),
});

export default connect(
	mstp,
	mdtp
)(Playlist);
