const { connect } = ReactRedux;
const { Link } = ReactRouter;
import { logout } from '../../../actions';
import SidebarModalLinks from './SidebarModalLinks';

const Sidebar = ({ logout }) => (
	<div className="sidebar">
		<Link to="/browse">
			<img
				className="logoB"
				src="https://s3-us-west-1.amazonaws.com/react-spotify-aa/react.png"
			/>
		</Link>
		<SidebarModalLinks />
		<button onClick={logout} className="logout">
			Log Out
		</button>
	</div>
);

const mdtp = dispatch => ({
	logout: () => dispatch(logout()),
});

export default connect(
	null,
	mdtp
)(Sidebar);
