const { Component } = React;
const { connect } = ReactRedux;
import SearchBar from './Youtube/SearchBar';
import SearchResults from './Youtube/SearchResults';
import Preview from './Youtube/Preview';

class UploadTypeToggle extends Component {
	state = {
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

	setVideo = (idx, id) => () =>
		this.props.setVideoId(id, () =>
			this.setState({ videoIdx: idx, videoId: id })
		);

	render() {
		const {
			isManual,
			switchType,
			results,
			photoUrl,
			fileChange,
		} = this.props;
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
					{isManual ? (
						<div>
							<div className="image-input">
								<img src={photoUrl || '#'} />
								<input type="file" onChange={fileChange} />
							</div>
						</div>
					) : !this.state.isLoading ? (
						<div>
							<Preview
								results={results}
								videoIdx={this.state.videoIdx}
							/>
							<SearchBar />
							<SearchResults
								results={results}
								setVideo={this.setVideo}
							/>
						</div>
					) : (
						<div>Loading: {this.props.progress}%</div>
					)}
				</div>
			</div>
		);
	}
}

const msp = state => ({
	progress: state.ui.songProgress,
});

export default connect(msp)(UploadTypeToggle);
