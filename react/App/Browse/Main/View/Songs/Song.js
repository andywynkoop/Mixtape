import { selectSong, pause } from '../../../../../actions';
const { connect } = ReactRedux;

const Song = ({ song, thisSongIsPlaying, pause, play, artist }) => {
	let click, icon;
	if (thisSongIsPlaying) {
		click = pause;
		icon = <i className="fas fa-pause" />;
	} else {
		click = play;
		icon = <i className="fas fa-play" />;
	}
	return (
		<li className="song" onClick={click}>
			<div>
				<div className="song-icon-container">
					<img src={artist.img} />
					{icon}
				</div>
				<div className="song-info">
					<h4>{song.title}</h4>
					<p>{artist.name}</p>
				</div>
			</div>
			<i className="fas fa-ellipsis-h" />
		</li>
	);
};

const msp = (state, { artists, song }) => {
	return {
		thisSongIsPlaying: state.ui.song == song.id && state.ui.playing,
		allSongs: Object.values(state.entities.songs),
		artist: artists[song.artistId],
	};
};

const mdp = (dispatch, props) => ({
	pause: () => dispatch(pause()),
	play: () => dispatch(selectSong(props.song.id)),
});

export default connect(
	msp,
	mdp
)(Song);
