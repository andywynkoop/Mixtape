import { fetchPlaylists } from '../../../../../actions';
const { Component } = React;
const { connect } = ReactRedux;
import PlaylistItem from './PlaylistItem';

class Playlists extends Component {
	componentDidMount() {
		this.props.fetchPlaylists();
	}

	render() {
		const { playlists, songs, playlistSongs } = this.props;
		return (
			<ul className="playlist-index">
				{playlists.map(playlist => (
					<PlaylistItem
						playlist={playlist}
						songs={songs}
						playlistSongs={playlistSongs}
					/>
				))}
			</ul>
		);
	}
}

const msp = ({ entities: { playlists, playlistSongs, songs } }) => ({
	playlists: Object.values(playlists),
	songs,
	playlistSongs,
});

const mdp = dispatch => ({
	fetchPlaylists: () => dispatch(fetchPlaylists()),
});

export default connect(
	msp,
	mdp
)(Playlists);
