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
		if (!this.props.loggedIn) {
			window.location.replace('/#/login');
		}
	}
	render = () => (
		<div className="browse">
			<div className="color-fix">
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
