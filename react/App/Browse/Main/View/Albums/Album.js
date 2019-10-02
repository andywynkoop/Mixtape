const { Component } = React;
const { connect } = ReactRedux;
const { Link } = ReactRouter;
import { selectSong, fetchAlbum } from '../../../../../actions';
import Song from '../Songs/Song';

class Album extends Component {
	componentDidMount() {
		console.log('album.js');
		this.props.fetchAlbum();
	}

	render() {
		const { album, artist, songs } = this.props;
		if (!album) return <div />;
		const { img, title } = album;
		return (
			<div className="album-show">
				<div className="album-show-artist">
					<img src={img} />
					<h4>{title}</h4>
					<h5>{artist.name}</h5>
				</div>
				<ul>
					{songs.map((song, i) => (
						<Song
							artists={{ [artist.id]: artist }}
							key={song.id}
							song={song}
						/>
					))}
				</ul>
				<Link to="/browse/albums">
					<button className="album-back">
						<i className="fas fa-chevron-left" />
					</button>
				</Link>
			</div>
		);
	}
}

const mstp = (state, props) => {
	const albumId = props.match.params.albumId;
	const album = state.entities.albums[albumId];
	let artist;
	let songs;
	if (album) {
		artist = state.entities.artists[album.artistId];
		songs = Object.values(state.entities.songs).filter(
			song => song.albumId == albumId
		);
	}
	return {
		queue: state.ui.queue,
		album,
		artist,
		songs,
	};
};

const mdtp = (dispatch, props) => ({
	selectSong: (id, queue) => dispatch(selectSong(id, queue)),
	fetchAlbum: () => dispatch(fetchAlbum(props.match.params.albumId)),
});

export default connect(
	mstp,
	mdtp
)(Album);
