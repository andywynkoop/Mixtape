import { CLOSE_ANY } from '../../reducers/ui/modal';
import { createYoutubeSong, createSong } from '../../actions';
const { connect } = ReactRedux;
const { Component } = React;
import UploadTypeToggle from './UploadTypeToggle';

class NewAlbumModal extends Component {
	state = {
		title: '',
		albumId: -1,
		artistId: -1,
		photo: null,
		photoUrl: '',
		uploadType: 'manual',
		videoId: null,
	};

	switchType = newType => () => this.setState({ uploadType: newType });

	setVideoId = (id, cb = () => null) => this.setState({ videoId: id }, cb);

	titleChange = e => this.setState({ title: e.target.value });

	albumChange = e => this.setState({ albumId: e.target.value });

	artistChange = e => this.setState({ artistId: e.target.value });

	fileChange = e => {
		const reader = new FileReader();
		const file = e.currentTarget.files[0];
		reader.onloadend = () =>
			this.setState({ photoUrl: reader.result, photo: file });

		if (file) reader.readAsDataURL(file);
	};

	submit = e => {
		e.preventDefault();
		if (this.state.uploadType === 'youtube') {
			this.props.youtubeSubmit({
				video_id: this.state.videoId,
				title: this.state.title,
				album_id: this.state.albumId,
			});
		} else {
			console.log('WARNING - STILL NEED TO IMPLEMENT');
			debugger;

			const { photo } = this.state;
			if (photo === null) return this.props.close();
			const form = new FormData();
			form.append('song[img]', this.state.photo);
			form.append('song[album_id]', this.state.albumId);
			form.append('song[title]', this.state.title);
			this.props.submit(form);
		}
	};

	close = e => {
		if (e.target.className === 'create-modal') {
			this.props.close();
		}
	};

	allArtists = () => (
		<select value={this.state.artistId} onChange={this.artistChange}>
			<option disabled selected={this.state.artistId === -1} value={-1}>
				Artist...
			</option>
			{this.props.artists.map(artist => (
				<option key={artist.id} value={artist.id}>
					{artist.name}
				</option>
			))}
		</select>
	);

	allAlbums = () => (
		<select value={this.state.albumId} onChange={this.albumChange}>
			<option disabled selected={this.state.albumId === -1} value={-1}>
				Album...
			</option>
			{this.props.albums
				.filter(album => album.artistId == this.state.artistId)
				.map(album => (
					<option key={album.id} value={album.id}>
						{album.title}
					</option>
				))}
		</select>
	);

	render() {
		const isManual = this.state.uploadType === 'manual';
		return (
			<div className="create-modal" onClick={this.close}>
				<div
					className={`create-modal-content ${
						isManual ? '' : 'youtube'
					}`}
				>
					<form onSubmit={e => e.preventDefault()}>
						<h2>Add New Song</h2>
						<p>
							Add a new song from here. You can either upload an
							audio file or download one from a youtube video:
						</p>
						<input
							type="text"
							value={this.state.title}
							onChange={this.titleChange}
							placeholder="Song Title..."
						/>
						{this.allArtists()}
						{this.allAlbums()}
						<button onClick={this.submit}>Save</button>
						<UploadTypeToggle
							photoUrl={this.state.photoUrl}
							fileChange={this.fileChange}
							isManual={isManual}
							switchType={this.switchType}
							setVideoId={this.setVideoId}
							close={this.props.close}
						/>
					</form>
				</div>
			</div>
		);
	}
}

const msp = state => ({
	artists: Object.values(state.entities.artists),
	albums: Object.values(state.entities.albums),
});

const mdp = dispatch => ({
	close: () => dispatch({ type: CLOSE_ANY }),
	submit: form => dispatch(createSong(form)),
	youtubeSubmit: songData => dispatch(createYoutubeSong(songData)),
});

export default connect(
	msp,
	mdp
)(NewAlbumModal);
