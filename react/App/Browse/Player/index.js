const { Component } = React;
const { connect } = ReactRedux;
import { play, pause, seekLeft, seekRight, playFirst } from '../../../actions';
import Preview from './Preview';

class Player extends Component {
	state = {
		progress: 0,
	};

	componentDidMount() {
		this.progressCheck = setInterval(this.setProgress, 2000);
	}

	componentWillUnmount() {
		this.audio.pause();
		clearInterval(this.progressCheck);
	}

	setProgress = () => {
		if (!this.audio || !this.props.playing) return;
		let percent = Math.floor(
			100 * (this.audio.currentTime / this.audio.duration)
		);
		this.setState({ progress: percent });
	};

	handleChange = e => {
		this.setState({ progress: parseInt(e.target.value) }, () => {
			if (this.audio) {
				this.audio.currentTime =
					(e.target.value / 100) * this.audio.duration;
			}
		});
	};

	handleVolumeChange = e => {
		this.setState({ volume: e.target.value }, () => {
			if (this.audio) {
				this.audio.volume = this.state.volume / 100.0;
			}
		});
	};

	componentDidUpdate(oldProps) {
		const { song } = this.props;
		if (!song) return;
		if (!oldProps.song || oldProps.song.id !== this.props.song.id) {
			if (!this.audio) {
				this.setState({ progress: 0 }, () => {
					this.audio = new Audio(song.audio);
					this.audio.onended = () => this.props.seekRight;
				});
			} else this.audio.setAttribute('src', song.audio);

			this.setState({ progress: 0 }, () => {
				this.audio.play();
			});
		}

		if (!oldProps.playing && this.props.playing) {
			this.audio.play();
		} else if (oldProps.playing && !this.props.playing) {
			this.audio.pause();
		}
	}

	playPauseFn = () => {
		if (!this.audio) return this.props.playFirst();
		return this.props.playing ? this.props.pause() : this.props.play();
	};

	playPauseBtn = () =>
		this.props.playing ? (
			<i className="fas fa-pause" />
		) : (
			<i className="fas fa-play" />
		);

	render() {
		const { seekLeft, seekRight, album, song, artist } = this.props;
		return (
			<div className="player">
				<div className="player-buttons">
					<button className="back" onClick={seekLeft}>
						<i className="fas fa-backward" />
					</button>
					<button className="play" onClick={this.playPauseFn}>
						{this.playPauseBtn()}
					</button>
					<button className="forward" onClick={seekRight}>
						<i className="fas fa-forward" />
					</button>
				</div>
				<div className="progress-container">
					<input
						type="range"
						className="progress"
						value={this.state.progress}
						max={100}
						onChange={this.handleChange.bind(this)}
					/>
				</div>
				<div className="volume-container">
					<input
						type="range"
						className="volume"
						value={this.state.volume}
						max={100}
						onChange={this.handleVolumeChange.bind(this)}
					/>
				</div>
				<Preview song={song} album={album} artist={artist} />
			</div>
		);
	}
}

const mstp = state => {
	const { songs, albums, artists } = state.entities;
	const song = songs[state.ui.song];
	let artist, album;
	if (song) {
		album = albums[song.album_id];
		artist = artists[album.artist_id];
	}
	return {
		song,
		album,
		artist,
		playing: state.ui.playing,
	};
};

const mdtp = dispatch => ({
	play: () => dispatch(play()),
	pause: () => dispatch(pause()),
	seekLeft: () => dispatch(seekLeft()),
	seekRight: () => dispatch(seekRight()),
	playFirst: () => dispatch(playFirst()),
});

export default connect(
	mstp,
	mdtp
)(Player);
