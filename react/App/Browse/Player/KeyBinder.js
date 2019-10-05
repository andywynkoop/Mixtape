const { Component } = React;

class KeyBinder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keys: {},
		};
	}

	componentDidMount() {
		document.addEventListener('keydown', this.keyDown);
		document.addEventListener('keyup', this.keyUp);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.keyDown);
		document.removeEventListener('keyup', this.keyUp);
	}

	keyDown = e => {
		if (this.state.keys[e.keyCode]) return;
		const newKeys = Object.assign({}, this.state.keys);
		newKeys[e.keyCode] = true;
		this.setState({ keys: newKeys }, () => {
			this.fire(this.state.keys, e);
		});
	};

	keyUp = e => {
		const newKeys = Object.assign({}, this.state.keys);
		delete newKeys[e.keyCode];
		this.setState({ keys: newKeys });
	};

	fire = (keys, e) => {
		const {
			playPause,
			seekLeft,
			seekRight,
			increaseVolume,
			decreaseVolume,
		} = this.props;
		if (keys[18]) {
			e.preventDefault();
			if (keys[32]) playPause();
			else if (keys[37]) seekLeft();
			else if (keys[39]) seekRight();
			else if (keys[189]) decreaseVolume();
			else if (keys[187]) increaseVolume();
			else if (keys[83]) navigate('/browse/search');
		}
	};

	render = () => <div style={{ display: 'none' }} />;
}

export default KeyBinder;
