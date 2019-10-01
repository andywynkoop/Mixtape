const { Link } = ReactRouter;
const { connect } = ReactRedux;
import { login } from '../../actions';

const Nav = ({ demo }) => (
	<nav className="nav">
		<Link to="/">
			<img
				className="logo"
				src="https://react-spotify-aa.s3-us-west-1.amazonaws.com/reactnote2.png"
			/>
		</Link>
		<ul className="nav-links">
			<Link to="/signup">Sign Up</Link>
			<Link to="/login">Log In</Link>
			<a onClick={demo}>Demo</a>
		</ul>
	</nav>
);

const mdtp = dispatch => ({
	demo: () =>
		dispatch(login({ email: 'Andy5@email.com', password: 'password' })),
});

export default connect(
	null,
	mdtp
)(Nav);
