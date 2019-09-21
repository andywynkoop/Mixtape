const { Component } = React;
const { connect } = ReactRedux;
import { fetchSongs, selectSong, pause } from '../../../../../actions';
import Song from './Song';

class Songs extends Component {
	componentDidMount() {
		this.props.fetchSongs();
	}

	selectSong = id => () => {
		let queue = [...this.props.queue];
		let startIdx = queue.findIndex(el => el === id.toString());
		let startSlice = queue.slice(startIdx, queue.length);
		let endSlice = queue.slice(0, startIdx);
		queue = startSlice.concat(endSlice);
		this.props.selectSong(id, queue);
	};

	render() {
		return (
			<ul>
				{this.props.songs.map((song, i) => (
					<Song
						song={song}
						i={i}
						select={this.selectSong}
						selected={song.id === parseInt(this.props.selected)}
						pause={this.props.pause}
						playing={this.props.playing}
					/>
				))}
			</ul>
		);
	}
}

const mstp = state => ({
	songs: Object.values(state.entities.songs),
	queue: Object.keys(state.entities.songs),
	selected: state.ui.song,
	playing: state.ui.playing,
});

const mdtp = dispatch => ({
	fetchSongs: () => dispatch(fetchSongs()),
	selectSong: (id, queue) => dispatch(selectSong(id, queue)),
	pause: () => dispatch(pause()),
});

export default connect(
	mstp,
	mdtp
)(Songs);
