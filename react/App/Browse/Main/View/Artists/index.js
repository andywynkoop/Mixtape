import { fetchArtists } from '../../../../../actions';
import ArtistItem from './ArtistItem';

const { Component } = React;
const { connect } = ReactRedux;

class Artists extends Component {
	componentDidMount() {
		this.props.fetchArtists();
	}

	render() {
		return (
			<ul className="artists-index">
				{this.props.artists.map(artist => (
					<ArtistItem key={artist.id} artist={artist} />
				))}
			</ul>
		);
	}
}

const msp = (state, { artists }) => ({
	artists: (artists || Object.values(state.entities.artists)).sort((a1, a2) =>
		a1.name > a2.name ? 1 : -1
	),
});

const mdp = dispatch => ({
	fetchArtists: () => dispatch(fetchArtists()),
});

export default connect(
	msp,
	mdp
)(Artists);
