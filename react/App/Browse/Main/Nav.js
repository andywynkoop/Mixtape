const { Link } = ReactRouter;

const Nav = () => (
	<nav className="main-nav">
		<ul>
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
			<li>
				<Link to="/browse/search">
					<i className="fa fa-search" />
				</Link>
			</li>
		</ul>
	</nav>
);

export default Nav;
