export const RECEIVE_CURRENT_USER = 'RECEIVE_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const SELECT_SONG = 'SELECT_SONG';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const RECEIVE_YOUTUBE = 'RECEIVE_YOUTUBE';
export const RECEIVE_SONG_PROGRESS = 'RECEIVE_SONG_PROGRESS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_MUSIC = 'RECEIVE_MUSIC';

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
	}).then(payload => dispatch({ type: RECEIVE_MUSIC, payload }));

export const fetchAlbums = () => dispatch =>
	$.ajax({
		method: 'get',
		url: '/api/albums',
	}).then(payload => dispatch({ type: RECEIVE_MUSIC, payload }));

export const fetchAlbum = id => dispatch =>
	$.ajax({
		method: 'get',
		url: `/api/albums/${id}`,
	}).then(payload => dispatch({ type: RECEIVE_MUSIC, payload }));

export const fetchArtists = () => dispatch =>
	$.ajax({
		method: 'get',
		url: '/api/artists',
	}).then(payload => dispatch({ type: RECEIVE_MUSIC, payload }));

const rotateQueue = (id, queue) => {
	const idx = queue.findIndex(songId => songId == id);
	const firstPart = queue.slice(0, idx);
	const secondPart = queue.slice(idx);
	return secondPart.concat(firstPart);
};

export const selectSong = (songId, queue = null) => (dispatch, getState) => {
	if (!queue)
		queue = Object.keys(getState().entities.songs).sort((s1, s2) => {
			if (s1.title > s2.title) return 1;
			return -1;
		});

	queue = rotateQueue(songId, [...queue]);
	dispatch({
		type: SELECT_SONG,
		songId,
		queue,
	});
};

export const play = () => ({ type: PLAY });
export const pause = () => ({ type: PAUSE });

export const seekLeft = () => (dispatch, getState) => {
	const _queue = getState().ui.queue;
	if (!_queue.length) return dispatch(playFirst());
	const queue = [..._queue];
	const prevSong = queue.pop();
	queue.unshift(prevSong);
	dispatch(selectSong(queue[0], queue));
};

export const seekRight = () => (dispatch, getState) => {
	const _queue = getState().ui.queue;
	if (!_queue.length) return dispatch(playFirst());
	const queue = [..._queue];
	const nextSong = queue.shift();
	queue.push(nextSong);
	dispatch(selectSong(queue[0], queue));
};

export const playFirst = (queue = null) => (dispatch, getState) => {
	if (!queue)
		queue = Object.keys(getState().entities.songs).sort((s1, s2) => {
			if (s1.title > s2.title) return 1;
			return -1;
		});

	dispatch(selectSong(queue[0], queue));
};

export const createArtist = form => dispatch =>
	$.ajax({
		method: 'post',
		url: '/api/artists',
		data: form,
		processData: false,
		contentType: false,
	}).then(payload => dispatch({ type: RECEIVE_MUSIC, payload }));

export const createAlbum = form => dispatch =>
	$.ajax({
		method: 'post',
		url: '/api/albums',
		data: form,
		processData: false,
		contentType: false,
	}).then(payload => dispatch({ type: RECEIVE_MUSIC, payload }));

import API_KEY from './secret';

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
	}).then(res => {
		io.on(res.waitingFor, songProgress => {
			dispatch({ type: RECEIVE_SONG_PROGRESS, songProgress });
		});
	});

export const search = query => dispatch =>
	$.ajax({
		method: 'get',
		url: `/api/search?query=${query}`,
	}).then(payload => dispatch({ type: RECEIVE_MUSIC, payload }));

export const createPlaylist = form => dispatch =>
	$.ajax({
		method: 'post',
		url: '/api/playlists',
		data: form,
		processData: false,
		contentType: false,
	}).then(payload => dispatch({ type: RECEIVE_MUSIC, payload }));
