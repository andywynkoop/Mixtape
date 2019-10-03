import { CLOSE_ANY } from '../../reducers/ui/modal';
import { createArtist } from '../../actions';
const { connect } = ReactRedux;
const { Component } = React;

class NewArtistModal extends Component {
	state = {
		name: '',
		photo: null,
		photoUrl: '',
		isUpload: false,
	};

	nameChange = e => this.setState({ name: e.target.value });

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
		const { photo, name, isUpload, photoUrl } = this.state;
		if (photo === null && isUpload) return this.props.close();
		const form = new FormData();
		if (isUpload) {
			form.append('artist[img]', photo);
		} else {
			form.append('img_url', photoUrl);
		}
		form.append('artist[name]', name);
		form.append('is_upload', isUpload);
		this.props.submit(form);
		this.props.close();
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
						<h2>Add New Artist</h2>
						<p>
							If you can't find an artist you're looking for here,
							you can add them below. Upload your own photo of the
							artist by clicking the image below, or paste a url:
						</p>
						<div className="image-input">
							<img src={this.state.photoUrl || '#'} />
							<input type="file" onChange={this.fileChange} />
						</div>
						<input
							type="text"
							onChange={this.addImageLink}
							placeholder="Link to Artist Image..."
						/>
						<input
							type="text"
							value={this.state.name}
							onChange={this.nameChange}
							placeholder="Artist Name..."
						/>
						<button>Save</button>
					</form>
				</div>
			</div>
		);
	}
}

const mdp = dispatch => ({
	close: () => dispatch({ type: CLOSE_ANY }),
	submit: form => dispatch(createArtist(form)),
});

export default connect(
	null,
	mdp
)(NewArtistModal);
