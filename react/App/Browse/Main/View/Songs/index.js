const { Component } = React;
const { connect } = ReactRedux;
import { fetchSongs } from '../../../../../actions';
import Song from './Song';

class Songs extends Component {
	componentDidMount() {
		this.props.fetchSongs();
	}

	render() {
		const { artists } = this.props;
		return (
			<ul>
				{this.props.songs.map(song => (
					<Song song={song} artists={artists} key={song.id} />
				))}
			</ul>
		);
	}
}

const mstp = (state, { songs }) => {
	songs = songs || Object.values(state.entities.songs);
	return {
		songs: songs.sort((s1, s2) => {
			if (s1.title > s2.title) return 1;
			return -1;
		}),
		artists: state.entities.artists,
	};
};

const mdtp = dispatch => ({
	fetchSongs: () => dispatch(fetchSongs()),
});

export default connect(
	mstp,
	mdtp
)(Songs);
