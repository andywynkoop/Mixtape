import './litebraries/ReactLite';
import './litebraries/ReduxLite';
import './litebraries/ReactReduxLite';
import './litebraries/ReactRouterLite';

import ioClient from 'socket.io-client';

const { createStore, applyMiddleware } = Redux;
const { Provider } = ReactRedux;
import rootReducer from './reducers';
import thunk from './middlewares/thunk';
import logger from './middlewares/logger';
import App from './App';
import { RECEIVE_SONG } from './actions';

Function.prototype.debounce = function(interval) {
	let timeout;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => this(...args), interval);
	};
};

document.addEventListener('DOMContentLoaded', () => {
	let preloaded;
	if (window.currentUser) {
		const { currentUser: user } = window;
		preloaded = {
			entities: {
				users: {
					[user.id]: user,
				},
			},
			session: user.id,
		};
	} else {
		preloaded = {};
	}
	// remove logger for deploy
	const store = createStore(rootReducer, preloaded, applyMiddleware(thunk));
	window.store = store;
	// easy hash navigation
	window.navigate = newPath => (window.location.hash = `#${newPath}`);

	// socket
	window.io = ioClient(
		'https://yt--dl.herokuapp.com/' || 'http://localhost:3001'
	);
	const receiveSong = payload => {
		store.dispatch({ type: RECEIVE_SONG, payload });
	};
	const receiveDebounced = receiveSong.debounce(1000);
	io.on('newSong', receiveDebounced);

	// react render
	React.render(
		<Provider store={store} Component={App} />,
		document.getElementById('app')
	);
});
