import { searchYoutube } from '../../../actions';

const { Component } = React;
const { connect } = ReactRedux;

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.search = this.search.debounce(1000);
	}

	inputValue = () => document.getElementById('searchbox').value;

	search = () => this.props.search(this.inputValue());

	render = () => (
		<input
			id="searchbox"
			type="text"
			onKeydown={this.search}
			placeholder="Search youtube..."
			className="youtube-search-bar"
		/>
	);
}

const mdp = dispatch => ({
	search: query => dispatch(searchYoutube(query)),
});

export default connect(
	null,
	mdp
)(SearchBar);
