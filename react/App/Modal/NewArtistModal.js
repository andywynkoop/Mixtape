import { CLOSE_ANY } from '../../reducers/ui/modal';
import { createArtist } from '../../actions';
const { connect } = ReactRedux;
const { Component } = React;

class NewArtistModal extends Component {
	state = {
		name: '',
		photo: null,
		photoUrl: '',
	};

	nameChange = e => this.setState({ name: e.target.value });

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
		form.append('artist[img]', this.state.photo);
		form.append('artist[name]', this.state.name);
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
						<h2>Add New Artist</h2>
						<p>
							If you can't find an artist you're looking for here,
							you can add them below:
						</p>
						<div className="image-input">
							<img src={this.state.photoUrl || '#'} />
							<input type="file" onChange={this.fileChange} />
						</div>
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
