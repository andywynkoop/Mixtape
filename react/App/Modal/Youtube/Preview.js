const { connect } = ReactRedux;

const Preview = ({ results, videoIdx }) => {
	const selectedVideo = results[videoIdx] || null;
	if (selectedVideo)
		return (
			<div className="preview">
				<img src={selectedVideo.snippet.thumbnails.default.url} />
				<p>{selectedVideo.snippet.title}</p>
			</div>
		);
	return <div />;
};

const msp = state => ({
	results: state.entities.search,
});

export default connect(msp)(Preview);
