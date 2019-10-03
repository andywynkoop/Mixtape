import Albums from '../Albums';
import Artists from '../Artists';
import Songs from '../Songs';

const { connect } = ReactRedux;

const Results = ({ artists, albums, songs }) => (
	<div>
		<Artists artists={artists} />
		<Albums albums={albums} />
		<Songs songs={songs} />
	</div>
);

const msp = state => {
	const {
		entities,
		ui: { searchResults },
	} = state;
	const { artists, albums, songs } = entities;
	const {
		artists: artistResults,
		albums: albumResults,
		songs: songResults,
	} = searchResults;
	return {
		artists: artistResults.map(id => artists[id]),
		albums: albumResults.map(id => albums[id]),
		songs: songResults.map(id => songs[id]),
	};
};
export default connect(msp)(Results);
