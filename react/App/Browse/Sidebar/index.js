const { connect } = ReactRedux;
const { Link } = ReactRouter;
import { logout, CHANGE_MENU } from '../../../actions';
import SidebarModalLinks from './SidebarModalLinks';

const Sidebar = ({ logout, select }) => (
	<div className="sidebar">
		<Link to="/browse">
			<img
				className="logoB"
				src="https://s3-us-west-1.amazonaws.com/react-spotify-aa/react.png"
			/>
		</Link>
		<p>Pages</p>
		<ul className="sidebar-page-links">
			<li onClick={() => select('playlists')}>Playlists</li>
			<li onClick={() => select('songs')}>Songs</li>
			<li onClick={() => select('albums')}>Albums</li>
			<li onClick={() => select('artists')}>Artists</li>
		</ul>
		<p>Contribute</p>
		<SidebarModalLinks />
		<button className="new-playlist">New Playlist</button>
		<button onClick={logout} className="logout">
			Log Out
		</button>
	</div>
);

const mdtp = dispatch => ({
	logout: () => dispatch(logout()),
	select: menu => dispatch({ type: CHANGE_MENU, menu }),
});

export default connect(
	null,
	mdtp
)(Sidebar);
