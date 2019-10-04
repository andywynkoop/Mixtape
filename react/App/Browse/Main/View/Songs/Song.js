import { selectSong, pause } from '../../../../../actions';
const { connect } = ReactRedux;

const Song = ({ song, thisSongIsPlaying, pause, play, artist, img }) => {
	let click, icon;
	if (thisSongIsPlaying) {
		click = pause;
		icon = <i className="fas fa-pause" />;
	} else {
		click = play;
		icon = <i className="fas fa-play" />;
	}

	const innerClick = e => {
		e.stopPropagation();
		navigate(`/browse/artists/${artist.id}`);
	};

	return (
		<li className="song" onClick={click}>
			<div>
				<div className="song-icon-container">
					<img src={img || artist.img} />
					{icon}
				</div>
				<div className="song-info">
					<h4>{song.title}</h4>
					<p onClick={innerClick}>{artist.name}</p>
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
	play: () => dispatch(selectSong(props.song.id, props.queue)),
});

export default connect(
	msp,
	mdp
)(Song);
