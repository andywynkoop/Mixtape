import { CLOSE_ANY } from '../../reducers/ui/modal';
import { createAlbum } from '../../actions';
const { connect } = ReactRedux;
const { Component } = React;

class NewAlbumModal extends Component {
	state = {
		title: '',
		year: 2019,
		artistId: -1,
		photo: null,
		photoUrl: '',
		isUpload: false,
	};

	titleChange = e => this.setState({ title: e.target.value });

	yearChange = e => this.setState({ year: e.target.value });

	artistChange = e => this.setState({ artistId: e.target.value });

	fileChange = e => {
		const reader = new FileReader();
		const file = e.currentTarget.files[0];
		reader.onloadend = () =>
			this.setState({
				photoUrl: reader.result,
				photo: file,
				isUpload: true,
			});

		if (file) reader.readAsDataURL(file);
	};

	addImageLink = e => {
		this.setState({ photoUrl: e.target.value, isUpload: false });
	};

	submit = e => {
		e.preventDefault();
		const { photo, artistId, title, year, isUpload, photoUrl } = this.state;
		if (photo === null && isUpload) return this.props.close();
		const form = new FormData();
		if (isUpload) {
			form.append('album[img]', photo);
		} else {
			form.append('img_url', photoUrl);
		}
		form.append('album[artist_id]', artistId);
		form.append('album[title]', title);
		form.append('album[year]', year);
		form.append('is_upload', isUpload);
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
				<div className="create-modal-content">
					<form onSubmit={this.submit}>
						<h2>Add New Album</h2>
						<p>
							If you're looking for an album that doesn't exist
							yet you can add it below. If the artist of the album
							doesn't exist either, you'll need to add them first
							via the link in the sidebar. You can upload the
							album art manually if you have it, or you can paste
							a link to a hosted image in the field below:
						</p>
						<div className="image-input">
							<img src={this.state.photoUrl || '#'} />
							<input type="file" onChange={this.fileChange} />
						</div>
						<input
							type="text"
							onChange={this.addImageLink}
							placeholder="Link to Album Image..."
						/>
						<input
							type="text"
							value={this.state.title}
							onChange={this.titleChange}
							placeholder="Album Title..."
						/>
						<input
							type="number"
							value={this.state.year}
							onChange={this.yearChange}
						/>
						<select
							value={this.state.artistId}
							onChange={this.artistChange}
						>
							<option
								disabled
								selected={this.state.artistId === -1}
								value={-1}
							>
								Artist...
							</option>
							{this.props.artists.map(artist => (
								<option key={artist.id} value={artist.id}>
									{artist.name}
								</option>
							))}
						</select>
						<button>Save</button>
					</form>
				</div>
			</div>
		);
	}
}

const msp = state => ({
	artists: Object.values(state.entities.artists),
});

const mdp = dispatch => ({
	close: () => dispatch({ type: CLOSE_ANY }),
	submit: form => dispatch(createAlbum(form)),
});

export default connect(
	msp,
	mdp
)(NewAlbumModal);
