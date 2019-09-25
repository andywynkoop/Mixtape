import { searchYoutube } from '../../actions';
const { Component } = React;
const { connect } = ReactRedux;

class UploadTypeToggle extends Component {
	state = {
		query: '',
		videoIdx: null,
		videoId: null,
		isLoading: false,
	};

	componentDidUpdate(oldProps) {
		if (!oldProps.progress && this.props.progress) {
			this.setState({ isLoading: true });
		} else if (oldProps.progress && !this.props.progress) {
			this.setState({ isLoading: false }, () => {
				this.props.close();
			});
		}
	}

	queryChange = e => {
		this.setState(
			{ query: e.target.value, videoIdx: null, videoId: null },
			() => {
				this.props.setVideoId(null, () => {
					this.props.search.debounce(200)(this.state.query);
				});
			}
		);
	};

	keyDown = e => {
		if (e.key === 'Enter') {
			e.preventDefault();
			e.stopPropagation();
		}
	};

	setVideo = (idx, id) => () =>
		this.setState({ videoIdx: idx, videoId: id }, () =>
			this.props.setVideoId(id)
		);

	preview = () => {
		const selectedVideo = this.props.results[this.state.videoIdx] || null;
		if (selectedVideo)
			return (
				<div className="preview">
					<img src={selectedVideo.snippet.thumbnails.default.url} />
					<p>{selectedVideo.snippet.title}</p>
				</div>
			);
	};

	manualOrYoutube = isManual => {
		const { photoUrl, fileChange } = this.props;
		if (isManual) {
			return (
				<div>
					<div className="image-input">
						<img src={photoUrl || '#'} />
						<input type="file" onChange={fileChange} />
					</div>
				</div>
			);
		} else {
			return this.youTube();
		}
	};

	youTube = () => {
		const { results } = this.props;
		if (!this.state.isLoading) {
			return (
				<div>
					{this.preview()}
					<input
						type="text"
						value={this.state.query}
						onChange={this.queryChange}
						onKeyDown={this.keyDown}
						placeholder="Search youtube..."
						className="youtube-search-bar"
					/>
					<ul className="search-results">
						{results.map((item, i) => (
							<li
								key={item.id.videoId}
								onClick={this.setVideo(i, item.id.videoId)}
							>
								<img
									src={item.snippet.thumbnails.default.url}
								/>
								<p>{item.snippet.title}</p>
							</li>
						))}
					</ul>
				</div>
			);
		} else {
			return <div>Loading: {this.props.progress}%</div>;
		}
	};

	render() {
		const { isManual, switchType, results } = this.props;
		return (
			<div>
				<ul className="modal-tabs">
					<li
						className={isManual ? 'active' : ''}
						onClick={switchType('manual')}
					>
						Upload Manually
					</li>
					<li
						className={isManual ? '' : 'active'}
						onClick={switchType('youtube')}
					>
						Youtube
					</li>
				</ul>
				<div className="modal-tab-view">
					{this.manualOrYoutube(isManual)}
				</div>
			</div>
		);
	}
}

const msp = state => ({
	results: state.entities.search,
	progress: state.ui.songProgress,
});

const mdp = dispatch => ({
	search: query => dispatch(searchYoutube(query)),
});

export default connect(
	msp,
	mdp
)(UploadTypeToggle);
