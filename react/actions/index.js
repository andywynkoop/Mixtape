export const RECEIVE_CURRENT_USER = 'RECEIVE_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const CHANGE_MENU = 'CHANGE_MENU';
export const SELECT_SONG = 'SELECT_SONG';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_YOUTUBE = 'RECEIVE_YOUTUBE';

export const signup = user => dispatch =>
	$.ajax({
		method: 'post',
		url: '/api/users',
		data: { user },
	}).then(
		user => dispatch({ type: RECEIVE_CURRENT_USER, user }),
		errors => dispatch({ type: RECEIVE_SESSION_ERRORS, errors })
	);

export const login = user => dispatch =>
	$.ajax({
		method: 'post',
		url: '/api/session',
		data: { user },
	}).then(
		user => dispatch({ type: RECEIVE_CURRENT_USER, user }),
		errors => dispatch({ type: RECEIVE_SESSION_ERRORS, errors })
	);

export const logout = () => dispatch =>
	$.ajax({
		method: 'delete',
		url: '/api/session',
	}).then(() => dispatch({ type: REMOVE_CURRENT_USER }));

export const clear = () => ({ type: CLEAR_ERRORS });

export const fetchSongs = (query = '') => dispatch =>
	$.ajax({
		method: 'get',
		url: `/api/songs?query=${query}`,
	}).then(payload => dispatch({ type: RECEIVE_SONGS, payload }));

export const selectSong = (songId, queue) => ({
	type: SELECT_SONG,
	songId,
	queue,
});

export const play = () => ({ type: PLAY });
export const pause = () => ({ type: PAUSE });

export const seekLeft = () => (dispatch, getState) => {
	const _queue = getState().ui.queue;
	const queue = [..._queue];
	const prevSong = queue.pop();
	queue.unshift(prevSong);
	dispatch(selectSong(queue[0], queue));
};

export const seekRight = () => (dispatch, getState) => {
	const _queue = getState().ui.queue;
	const queue = [..._queue];
	const nextSong = queue.shift();
	queue.push(nextSong);
	dispatch(selectSong(queue[0], queue));
};

export const playFirst = () => (dispatch, getState) => {
	const _queue = getState().ui.queue;
	const queue = [..._queue];
	dispatch(selectSong(queue[0], queue));
};

export const fetchAlbums = () => dispatch =>
	$.ajax({
		method: 'get',
		url: '/api/albums',
	}).then(albums => dispatch({ type: RECEIVE_ALBUMS, albums }));

export const playAlbum = (id, cb) => dispatch =>
	$.ajax({
		method: 'get',
		url: `/api/albums/${id}`,
	})
		.then(payload => dispatch({ type: RECEIVE_SONGS, payload }))
		.then(() => {
			if (cb) cb();
		});

export const createArtist = form => dispatch =>
	$.ajax({
		method: 'post',
		url: '/api/artists',
		data: form,
		processData: false,
		contentType: false,
	}).then(artist => dispatch({ type: RECEIVE_ARTIST, artist }));

export const createAlbum = form => dispatch =>
	$.ajax({
		method: 'post',
		url: '/api/albums',
		data: form,
		processData: false,
		contentType: false,
	}).then(album => dispatch({ type: RECEIVE_ALBUM, album }));

const API_KEY = 'AIzaSyCFEDOoocLQU5VxNX5ijBAiZgEXEu-LvUk';

export const searchYoutube = query => dispatch =>
	$.ajax({
		method: 'get',
		url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&type=video&key=${API_KEY}`,
	}).then(results => dispatch({ type: RECEIVE_YOUTUBE, results }));

export const createSong = form => dispatch => {
	debugger;
};
export const createYoutubeSong = data => dispatch =>
	$.ajax({
		method: 'post',
		url: '/api/songs',
		data: { song: data },
	}).then(
		res => {
			debugger;
		},
		err => {
			debugger;
		}
	);
