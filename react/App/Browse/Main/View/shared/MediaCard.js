const { Component } = React;
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
					handleClick: this.props.select,
					icon: <i className="fas fa-play" />,
			  };

	handleClick = e => {
		if (e.target.className !== 'fas fa-play') {
			window.location.replace(`/#${this.props.redirect}`);
		}
	};
	render() {
		const { img, title, creator, redirect } = this.props;
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

export default MediaCard;
