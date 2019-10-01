import { search } from '../../../../../actions';

const { Component } = React;
const { connect } = ReactRedux;

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.search = this.search.debounce(1000);
		this.firstRender = true;
	}

	componentDidUpdate() {
		if (this.firstRender && this.input()) {
			this.input().focus();
			this.firstRender = false;
		}
	}

	focus = () => this.input().focus();

	input = () => document.getElementById('main-search');

	inputValue = () => this.input().value;

	search = () => this.props.search(this.inputValue());

	render = () => (
		<input
			id="main-search"
			type="text"
			onKeydown={this.search}
			placeholder="Search for songs, albums, or artists..."
		/>
	);
}

const mdp = dispatch => ({
	search: query => dispatch(search(query)),
});

export default connect(
	null,
	mdp
)(SearchBar);
