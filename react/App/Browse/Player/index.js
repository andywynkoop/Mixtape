const { Component } = React;
const { connect } = ReactRedux;
import { play, pause, seekLeft, seekRight, playFirst } from '../../../actions';
import Preview from './Preview';

class Player extends Component {
	state = {
		progress: 0,
		volume: window.localStorage.getItem('player-volume') || 50,
	};

	componentWillUnmount() {
		clearInterval(this.progressCheck);
		window.audio.pause();
		this.removeTitle();
		delete window.audio;
	}

	setProgress = () => {
		if (!window.audio || !this.props.playing)
			return clearInterval(this.progressCheck);
		const progress = Math.floor(100 * (audio.currentTime / audio.duration));
		this.setState({ progress });
	};

	handleChange = e => {
		this.setState({ progress: parseInt(e.target.value) }, () => {
			if (window.audio) {
				window.audio.currentTime =
					(e.target.value / 100) * window.audio.duration;
			}
		});
	};

	handleVolumeChange = e => {
		const newVolume = parseInt(e.target.value);
		window.localStorage.setItem('player-volume', newVolume);
		this.setState({ volume: newVolume }, () => {
			if (window.audio) {
				window.audio.volume = this.state.volume / 100.0;
			}
		});
	};

	createOrUpdateAudio = () => {
		const { song, seekRight } = this.props;
		this.setState({ progress: 0 }, () => {
			if (!window.audio) {
				window.audio = new Audio(song.audio);
				window.audio.onended = seekRight;
			} else {
				window.audio.setAttribute('src', song.audio);
				window.audio.play();
				this.setTitle();
			}
		});
	};

	getTitleElement = () => document.getElementsByTagName('title')[0];
	setTitle = () =>
		(this.getTitleElement().innerText = `♫ ${this.props.song.title} - ${this.props.artist.name}`);
	removeTitle = () => (this.getTitleElement().innerText = 'Mixtape');
	componentDidUpdate(oldProps) {
		const { song } = this.props;
		if (!song) return;
		if (!oldProps.song || oldProps.song.id !== this.props.song.id) {
			this.createOrUpdateAudio();
		}

		if (!oldProps.playing && this.props.playing) {
			window.audio.play();
			this.setTitle();
			this.progressCheck = setInterval(this.setProgress, 1000);
		} else if (oldProps.playing && !this.props.playing) {
			window.audio.pause();
			this.removeTitle();
			clearInterval(this.progressCheck);
		}
	}

	playPauseFn = () => {
		if (!window.audio) return this.props.playFirst();
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
						onChange={this.handleChange}
					/>
				</div>
				<div className="volume-container">
					<input
						type="range"
						className="volume"
						value={this.state.volume}
						max={100}
						onChange={this.handleVolumeChange}
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
		album = albums[song.albumId];
		artist = artists[album.artistId];
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
