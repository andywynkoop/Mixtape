const { connect } = ReactRedux;

const SearchResults = ({ results, setVideo }) => (
	<ul className="search-results">
		{results.map((item, i) => (
			<li key={item.id.videoId} onClick={setVideo(i, item.id.videoId)}>
				<img src={item.snippet.thumbnails.default.url} />
				<p>{item.snippet.title}</p>
			</li>
		))}
	</ul>
);

const msp = state => ({
	results: state.entities.search,
});

export default connect(msp)(SearchResults);
