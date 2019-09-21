const { Component } = React;
const { Link } = ReactRouter;
class Form extends Component {
	state = {
		email: '',
		password: '',
	};

	componentDidUpdate(oldProps) {
		if (this.props.loggedIn) {
			window.location.replace('/#/browse');
		}
		if (this.props.type !== oldProps.type) {
			this.props.clear();
		}
	}

	change = field => e => this.setState({ [field]: e.target.value });

	submit = e => {
		e.preventDefault();
		this.props.submit(this.state);
	};

	demo = e => {
		e.preventDefault();
		this.props.demo();
	};

	oppositeType = () => (this.props.type === 'Log In' ? 'Sign Up' : 'Log In');

	oppositeLink = () => (this.props.type === 'Log In' ? '/signup' : '/login');

	renderErrors = type => {
		let errors = this.props.errors || {};
		if (Object.keys(errors).length > 0) {
			let errorList = [...errors[type]];
			if (type === 'password') {
				errorList = errorList.concat(errors['general']);
			}
			if (errorList.length > 0) {
				return errorList.map(msg => <p className="error">{msg}</p>);
			}
		}
		return <p className="error" />;
	};

	render = () => (
		<div className="session-form">
			<form onSubmit={this.submit}>
				<Link to="/">
					<img
						className="logo"
						src="https://s3-us-west-1.amazonaws.com/react-spotify-aa/react.png"
					/>
				</Link>
				<h1>{this.props.type}</h1>
				<input
					type="text"
					onChange={this.change('email')}
					value={this.state.email}
					placeholder="Email"
				/>
				{this.renderErrors('email')}
				<input
					type="password"
					onChange={this.change('password')}
					value={this.state.password}
					placeholder="Password"
				/>
				{this.renderErrors('password')}
				<button type="submit">{this.props.type}</button>
				<button onClick={this.demo} className="demo">
					Demo
				</button>
				<h2>
					or{' '}
					<Link to={this.oppositeLink()}>{this.oppositeType()}</Link>
				</h2>
			</form>
		</div>
	);
}

export default Form;
