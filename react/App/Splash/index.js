const { Component } = React;
const { connect } = ReactRedux;
const { Link } = ReactRouter;
import Nav from './Nav';

class Splash extends Component {
	componentDidMount() {
		if (this.props.loggedIn) this.props.history.push('/browse');
	}
	componentDidUpdate() {
		if (this.props.loggedIn && window.location.hash === '#/')
			this.props.history.push('/browse');
	}

	render = () => (
		<div className="splash-main">
			<Nav />
			<div className="splash">
				<h1>Music for Everyone.</h1>
				<Link to="/login">
					<button className="login">Log In</button>
				</Link>
				<h2>
					A free music player built using custom implementations of
					the following frontend libraries:
				</h2>
				<ul className="splash-ul">
					<li>React</li>
					<li>Redux</li>
					<li>React Redux</li>
					<li>React Router DOM</li>
				</ul>
			</div>
		</div>
	);
}

const mstp = state => ({
	loggedIn: state.session,
});

export default connect(mstp)(Splash);
