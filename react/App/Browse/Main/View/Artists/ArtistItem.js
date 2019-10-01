import { playFirst, pause } from '../../../../../actions';
const { Link } = ReactRouter;
const { Component } = React;
const { connect } = ReactRedux;

class ArtistItem extends Component {
	play = () => this.props.play(this.props.allArtistSongs);
	pause = () => this.props.pause();
	render() {
		const { artist, isPlaying } = this.props;
		return (
			<li>
				<div
					className="artist-index-img"
					onClick={isPlaying ? this.pause : this.play}
				>
					<i className={`fas fa-${isPlaying ? 'pause' : 'play'}`} />
					<img src={artist.img} />
				</div>
				<Link to={`/artists/${artist.id}`}>
					<p>{artist.name}</p>
				</Link>
			</li>
		);
	}
}

const msp = (state, { artist }) => {
	const allArtistSongs = Object.values(state.entities.songs)
		.filter(s => s.artistId == artist.id)
		.sort((s1, s2) => {
			if (s1.title > s2.title) return 1;
			return -1;
		})
		.map(s => s.id);

	return {
		allArtistSongs,
		isPlaying: allArtistSongs.includes(state.ui.song) && state.ui.playing,
	};
};

const mdp = dispatch => ({
	play: queue => dispatch(playFirst(queue)),
	pause: () => dispatch(pause()),
});

export default connect(
	msp,
	mdp
)(ArtistItem);
