import Nav from './Nav';
const { Route } = ReactRouter;
import Albums from './View/Albums';
import Album from './View/Albums/Album';
import Songs from './View/Songs';
import Artists from './View/Artists';
import Artist from './View/Artists/Artist';
import Playlists from './View/Playlists';
import Search from './View/Search';
import Playlist from './View/Playlists/Playlist';

const withNav = Component => props => (
	<div>
		<Nav {...props} />
		<Component {...props} />
	</div>
);

export default () => (
	<div className="main">
		<Route path="/browse/albums/:albumId" component={Album} />
		<Route exact path="/browse/albums" component={withNav(Albums)} />
		<Route exact path="/browse/artists/:artistId" component={Artist} />
		<Route exact path="/browse/artists" component={withNav(Artists)} />
		<Route
			exact
			path="/browse/playlists/:playlistId"
			component={Playlist}
		/>
		<Route exact path="/browse/playlists" component={withNav(Playlists)} />
		<Route exact path="/browse/search" component={Search} />
		<Route exact path="/browse" component={withNav(Songs)} />
	</div>
);
