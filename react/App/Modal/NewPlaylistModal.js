import { CLOSE_ANY } from '../../reducers/ui/modal';
import { createPlaylist } from '../../actions';
const { connect } = ReactRedux;
const { Component } = React;

class NewPlaylistModal extends Component {
	state = {
		name: '',
		photo: null,
		photoUrl: '',
		selectedSongs: {},
		selectedSongIds: [],
	};

	nameChange = e => this.setState({ name: e.target.value });

	fileChange = e => {
		const reader = new FileReader();
		const file = e.currentTarget.files[0];
		reader.onloadend = () =>
			this.setState({
				photoUrl: reader.result,
				photo: file,
			});

		if (file) reader.readAsDataURL(file);
	};

	toggleSelect = songId => {
		const { selectedSongIds, selectedSongs } = this.state;
		const newSelected = Object.assign({}, selectedSongs);
		let newSongs = [...selectedSongIds];
		const songIsAlreadySelected = !!selectedSongs[songId];
		if (songIsAlreadySelected) {
			delete newSelected[songId];
			newSongs = newSongs.filter(id => id != songId);
		} else {
			newSelected[songId] = true;
			newSongs.push(songId);
		}
		this.setState({
			selectedSongs: newSelected,
			selectedSongIds: newSongs,
		});
	};

	selectedMarker = songId => {
		if (!this.state.selectedSongs[songId]) return null;
		const ord = this.state.selectedSongIds.findIndex(el => el == songId);
		return <span>{ord + 1}</span>;
	};

	isSelected = songId => !!this.state.selectedSongs[songId];

	submit = e => {
		e.preventDefault();
		const { photo, name, selectedSongIds } = this.state;
		if (name === '') name = `Playlist_${Math.floor(Math.random() * 10000)}`;
		const form = new FormData();
		form.append('playlist[img]', photo);
		form.append('playlist[name]', name);
		selectedSongIds.forEach((song, ord) => {
			form.append(`playlist_songs[${song}]`, ord);
		});
		this.props.submit(form);
	};

	close = e => {
		if (e.target.className === 'create-modal') {
			this.props.close();
		}
	};

	render() {
		return (
			<div className="create-modal" onClick={this.close}>
				<div className="create-modal-content new-playlist-modal">
					<form onSubmit={this.submit}>
						<h2>Create New Playlist</h2>
						<p>
							Give your playlist a name and an image of your
							choice. You can also pick some songs from below to
							get started (you can add more songs to your playlist
							later)
						</p>
						<div className="image-input">
							<img src={this.state.photoUrl || '#'} />
							<input type="file" onChange={this.fileChange} />
						</div>
						<input
							type="text"
							value={this.state.name}
							onChange={this.nameChange}
							placeholder="Playlist Name..."
						/>
						<ul className="playlist-create-song-list">
							<p>(Optional) Add some songs:</p>
							{this.props.songs.map(song => (
								<li
									onClick={() => this.toggleSelect(song.id)}
									className={
										this.isSelected(song.id)
											? 'playlist-selected'
											: ''
									}
								>
									<p>{song.title}</p>
									<p>{this.selectedMarker(song.id)}</p>
								</li>
							))}
						</ul>
						<button>Save</button>
					</form>
				</div>
			</div>
		);
	}
}

const msp = state => ({
	songs: Object.values(state.entities.songs).sort((s1, s2) =>
		s1.title < s2.title ? 1 : -1
	),
});

const mdp = dispatch => ({
	close: () => dispatch({ type: CLOSE_ANY }),
	submit: form => dispatch(createPlaylist(form)),
});

export default connect(
	msp,
	mdp
)(NewPlaylistModal);
