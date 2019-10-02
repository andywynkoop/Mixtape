const { Component } = React;
const { connect } = ReactRedux;
import { fetchAlbums } from '../../../../../actions';
import MediaCard from '../shared/MediaCard';

class Albums extends Component {
	componentDidMount() {
		this.props.fetchAlbums();
	}

	render() {
		return (
			<div>
				<ul className="albums">
					{this.props.albums.map(album => (
						<MediaCard album={album} />
					))}
				</ul>
			</div>
		);
	}
}

const mstp = (state, { albums }) => ({
	albums: (albums || Object.values(state.entities.albums)).sort((a1, a2) =>
		a1.title > a2.title ? 1 : -1
	),
});

const mdtp = dispatch => ({
	fetchAlbums: () => dispatch(fetchAlbums()),
});

export default connect(
	mstp,
	mdtp
)(Albums);
