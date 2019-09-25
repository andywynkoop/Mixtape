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
	};

	titleChange = e => this.setState({ title: e.target.value });

	yearChange = e => this.setState({ year: e.target.value });

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
		const { photo } = this.state;
		if (photo === null) return this.props.close();
		const form = new FormData();
		form.append('album[img]', this.state.photo);
		form.append('album[artist_id]', this.state.artistId);
		form.append('album[title]', this.state.title);
		form.append('album[year]', this.state.year);
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
							If you can't find an album you're looking for here,
							you can add it below:
						</p>
						<div className="image-input">
							<img src={this.state.photoUrl || '#'} />
							<input type="file" onChange={this.fileChange} />
						</div>
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
