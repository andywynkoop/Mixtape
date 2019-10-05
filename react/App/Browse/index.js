const { connect } = ReactRedux;
import Sidebar from './Sidebar';
import Player from './Player';
import Main from './Main';
import Modal from '../Modal';

class Browse extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		if (!this.props.loggedIn) navigate('/');
	}

	coolColors = () => {
		const path = window.location.hash.slice(1);
		if (path === '/browse') return 0;
		if (path.startsWith('/browse/albums')) return 40;
		if (path.startsWith('/browse/artists')) return 320;
		if (path.startsWith('/browse/playlists')) return 250;
	};

	render = () => (
		<div className="browse">
			<div className={`color-fix color-fix-${this.coolColors()}`}>
				<Sidebar />
				<Player />
				<Main />
				<Modal />
			</div>
		</div>
	);
}

const mstp = state => ({ loggedIn: state.session });
const mdtp = dispatch => ({
	logout: () => dispatch(logout()),
});

export default connect(
	mstp,
	mdtp
)(Browse);
