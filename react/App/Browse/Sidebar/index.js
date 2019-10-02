const { connect } = ReactRedux;
const { Link } = ReactRouter;
import { logout } from '../../../actions';
import SidebarModalLinks from './SidebarModalLinks';
import { OPEN_NEW_PLAYLIST } from '../../../reducers/ui/modal';

const Sidebar = ({ logout, newPlaylist }) => (
	<div className="sidebar">
		<Link to="/browse">
			<img
				className="logoB"
				src="https://react-spotify-aa.s3-us-west-1.amazonaws.com/reactnote2.png"
			/>
		</Link>
		<p>Pages</p>
		<ul className="sidebar-page-links">
			<li>
				<Link to="/browse/playlists">Playlists</Link>
			</li>
			<li>
				<Link to="/browse">Songs</Link>
			</li>
			<li>
				<Link to="/browse/albums">Albums</Link>
			</li>
			<li>
				<Link to="/browse/artists">Artists</Link>
			</li>
		</ul>
		<p>Contribute</p>
		<SidebarModalLinks />
		<button onClick={newPlaylist} className="new-playlist">
			New Playlist
		</button>
		<button onClick={logout} className="logout">
			Log Out
		</button>
		<p>Personal</p>
		<ul className="create-modal-links">
			<li>
				<Link to="/browse/search">
					Search <i className="fa fa-search small" />
				</Link>
			</li>
		</ul>
	</div>
);

const mdtp = dispatch => ({
	logout: () => dispatch(logout()),
	newPlaylist: () => dispatch({ type: OPEN_NEW_PLAYLIST }),
});

export default connect(
	null,
	mdtp
)(Sidebar);
