const { Component } = React;
const { connect } = ReactRedux;
const { Link } = ReactRouter;
import { fetchArtist, playFirst } from '../../../../../actions';
import Albums from '../Albums';
import Songs from '../Songs';

class Artist extends Component {
	componentDidMount() {
		this.props.fetchArtist();
	}

	shuffle = songs =>
		songs
			.sort((s1, s2) => Math.floor(Math.random() * 3) - 1)
			.map(s => s.id);

	render() {
		const { artist, albums, songs, playArtist } = this.props;
		if (!artist) return <div />;
		const { img, name } = artist;
		return (
			<div className="artist-show">
				<div className="artist-show-jumbotron">
					<img src={img} />
					<h5>{name}</h5>
					<button onClick={() => playArtist(this.shuffle(songs))}>
						Shuffle Play
					</button>
				</div>
				<Albums albums={albums} />
				<Songs songs={songs} />
				<Link to="/browse/artists">
					<button className="artist-back">
						<i className="fas fa-chevron-left" />
					</button>
				</Link>
			</div>
		);
	}
}

const mstp = (state, props) => {
	const artistId = props.match.params.artistId;
	const artist = state.entities.artists[artistId];
	let albums;
	let songs;
	if (artist) {
		albums = Object.values(state.entities.albums).filter(
			album => album.artistId == artistId
		);
		const albumIds = albums
			.map(a => a.id)
			.sort((a1, a2) => (a1.title < a2.title ? 1 : -1));
		songs = Object.values(state.entities.songs)
			.filter(song => albumIds.includes(parseInt(song.albumId)))
			.sort((s1, s2) => (s1.title < s2.title ? 1 : -1));
	}
	return {
		artist,
		albums,
		songs,
	};
};

const mdtp = (dispatch, props) => ({
	playArtist: artistSongs => dispatch(playFirst(artistSongs)),
	fetchArtist: () => dispatch(fetchArtist(props.match.params.artistId)),
});

export default connect(
	mstp,
	mdtp
)(Artist);
