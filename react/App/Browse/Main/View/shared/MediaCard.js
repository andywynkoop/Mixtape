import { playFirst, pause } from '../../../../../actions';
const { Component } = React;
const { connect } = ReactRedux;

class MediaCard extends Component {
	attributes = () =>
		this.props.selected
			? {
					overlayClass: 'media-overlay-selected',
					handleClick: this.props.pause,
					icon: <i className="fas fa-pause" />,
			  }
			: {
					overlayClass: 'media-overlay',
					handleClick: () => this.props.playFirst(this.props.queue),
					icon: <i className="fas fa-play" />,
			  };

	handleClick = e => {
		if (e.target.className !== 'fas fa-play') {
			navigate(`/browse/albums/${this.props.album.id}`);
		}
	};
	render() {
		const { img, title, creator } = this.props.album;
		const { overlayClass, handleClick, icon } = this.attributes();
		return (
			<a onClick={this.handleClick}>
				<div className="media-card">
					<img src={img} />
					<div className={overlayClass}>
						<button className="media-play" onClick={handleClick}>
							{icon}
						</button>
					</div>
					<h4>{title}</h4>
					<h5>{creator}</h5>
				</div>
			</a>
		);
	}
}

const msp = (state, { album }) => ({
	queue: Object.values(state.entities.songs)
		.filter(song => song.albumId == album.id)
		.map(song => song.id),
});

const mdp = dispatch => ({
	playFirst: queue => dispatch(playFirst(queue)),
	pause: () => dispatch(pause()),
});

export default connect(
	msp,
	mdp
)(MediaCard);
